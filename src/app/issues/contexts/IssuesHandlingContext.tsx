import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Issue, issueFactory } from '../model/issue';

type IssuesHandlingContextType = {
  issues: Issue[];
  addIssue: () => void;
  deleteIssue: (id: Issue['id']) => void;
  saveIssues: () => void;
};

// const IssuesHandlingContext = createContext<
//   IssuesHandlingContextType | undefined
// >(undefined);

const throwContextError = () => {
  throw new Error('IssuesHandlingContext is not availabe in the parent tree');
};
const IssuesHandlingContext = createContext<IssuesHandlingContextType>({
  issues: [],
  addIssue: throwContextError,
  deleteIssue: throwContextError,
  saveIssues: throwContextError,
});

export const IssuesHandlingContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [issues, setIssues] = useState([
    issueFactory(),
    issueFactory(),
    issueFactory(),
    issueFactory(),
    issueFactory(),
  ]);

  const deleteIssue = useCallback((id: Issue['id']) => {
    // TODO
    console.log('Delete issue with id:', id);
    setIssues((prev) => prev.filter((issue) => issue.id !== id));
  }, []);

  const addIssue = useCallback(() => {
    setIssues((prev) => [...prev, issueFactory()]);
    // setIssues([...issues, issueFactory()]);
    // }, [issues]);
  }, []);

  const saveIssues = useCallback(() => {
    // TODO
  }, []);

  const contextValue: IssuesHandlingContextType = useMemo(
    () => ({
      issues,
      addIssue,
      deleteIssue,
      saveIssues,
    }),
    [issues, addIssue, deleteIssue, saveIssues]
  );

  return (
    <IssuesHandlingContext.Provider value={contextValue}>
      {children}
    </IssuesHandlingContext.Provider>
  );
};

export const useIssues = () => useContext(IssuesHandlingContext);
