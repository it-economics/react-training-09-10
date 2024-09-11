import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import Hello from '../../components/hello/Hello';
import { Input } from '../../components/input/Input';

export const Home: FC = () => {
  const [name, setName] = useState<string>(); // or: useState('') to automatically infer the type

  return (
    <>
      <Hello name={name} />
      <Input onInputChange={(value) => setName(value)} />
      <DeeplyNested />
    </>
  );
};

type INameContext = {
  name: string;
  setName: (name: string) => void;
};

const NameContext = createContext<INameContext>({
  name: 'Foo Bar ABC',
  setName: () => {},
});

const DeeplyNested = () => {
  const [name, setName] = useState<string>(); // or: useState('') to automatically infer the type

  return (
    <NameContextProvider
      name={name ?? ''}
      setName={(value) => setName(value + value)}
    >
      <Nested />
    </NameContextProvider>
  );
};

const NameContextProvider: FC<PropsWithChildren<INameContext>> = ({
  children,
  ...value
}) => <NameContext.Provider value={value}>{children}</NameContext.Provider>;

const useNameFromNameContext = () => useContext(NameContext).name; // use custom hook to expose only subset of context

const Nested = () => {
  const { name, setName } = useContext(NameContext);

  const name2 = useNameFromNameContext()

  return (
    <>
      <Hello name={name2} />;
      <Input onInputChange={setName} />;
    </>
  );
};
