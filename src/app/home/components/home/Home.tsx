import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Stack, Typography } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { Counter } from '../counter/Counter';
import Hello from '../hello/Hello';
import { Input } from '../input/Input';

import styles from './Home.module.css';
import { updateName, useName } from '../../slice';
import { useAppDispatch } from '../../../redux/hooks';

export const Home: FC = () => {
  // const [name, setName] = useState<string>(); // or: useState('') to automatically infer the type
  const name = useName();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  return (
    <Stack spacing={2} className={styles.home}>
      <Stack direction={'row'} spacing={2}>
        <Input onInputChange={(value) => dispatch(updateName(value))} />
        <Hello name={name} />
      </Stack>
      {/*<DeeplyNested />*/}
      {show ? (
        <Button
          startIcon={<VisibilityOffIcon />}
          onClick={() => setShow((prev) => !prev)}
        >
          Hide counter
        </Button>
      ) : (
        <Button
          startIcon={<VisibilityIcon />}
          onClick={() => setShow((prev) => !prev)}
        >
          Show counter
        </Button>
      )}
      {show && <Counter />}
    </Stack>
  );
};

type INameContext = {
  name: string;
  setName: (name: string) => void;
};

const NameContext = createContext<INameContext>({
  name: 'Foo Bar ABC',
  setName: () => {
    // do nothing
  },
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

  const name2 = useNameFromNameContext(); // use only name from context

  return (
    <>
      <Typography variant="h5" component="h2">
        Deeply Nested Context
      </Typography>
      <Hello name={name2} />
      <Input onInputChange={setName} />
    </>
  );
};
