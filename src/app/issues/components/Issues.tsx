import { IssuesHandlingContextProvider } from '../contexts/IssuesHandlingContext';
import { IssuesTable } from './IssuesTable';

export const Issues = () => {
  return (
    <>
      <h1>Issues</h1>
      <IssuesHandlingContextProvider>
        <IssuesTable />
      </IssuesHandlingContextProvider>
    </>
  );
};
