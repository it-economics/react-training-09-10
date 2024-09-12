import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import { useIssues } from '../contexts/IssuesHandlingContext';
import { IssuePriority } from '../model/issue';
// import { memo } from 'react';

export const IssuesTable = () => {
  const { issues, deleteIssue } = useIssues();

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      type: 'string',
      sortable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      type: 'string',
      sortable: false,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 200,
      type: 'string',
      sortable: false,
      editable: true,
    },
    {
      field: 'completed',
      headerName: 'Completed',
      width: 50,
      type: 'boolean',
      sortable: true,
      editable: true,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 100,
      type: 'singleSelect',
      editable: true,
      valueOptions: Object.values(IssuePriority),
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
      type: 'date',
      valueFormatter: (value) => new Date(value).toUTCString(),
      sortable: true,
      editable: false,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
            color="inherit"
            onClick={() => deleteIssue(id as string)}
          />,
        ];
      },
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={issues}
      slots={{
        toolbar: EditToolbar,
      }}
    />
  );
};

const EditToolbar = () => {
  const { addIssue, saveIssues } = useIssues();
  return (
    <GridToolbarContainer>
      <Button startIcon={<AddIcon />} variant="contained" onClick={addIssue}>
        Add Issue
      </Button>
      <Button startIcon={<SaveIcon />} variant="contained" onClick={saveIssues}>
        Save
      </Button>
    </GridToolbarContainer>
  );
};

// avoid re-rendering the component when the parent re-renders if the passed properties are equal
// export const IssuesTable = memo(_IssuesTable, (prev, next) => _.isEqual(prev, next)); // Pure components
