import {
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Planet as PlanetModel } from '../planet/model';
// import { Planet } from '../planet/Planet';
import { usePlanets } from '../star-wars/api';
import {
  DataGrid,
  GridActionsCell,
  GridActionsCellItem,
  GridColDef,
} from '@mui/x-data-grid';
import { Planet } from '../star-wars/model';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { extractPlanetIdFromUrl } from '../star-wars/planet-utils';

const useColumns = (): GridColDef<Planet>[] => {
  const navigate = useNavigate();
  return [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      type: 'string',
      sortable: true,
    },
    {
      field: 'diameter',
      headerName: 'Diameter',
      width: 100,
      type: 'number',
      sortable: true,
    },
    {
      field: 'gravity',
      headerName: 'Gravity',
      width: 200,
      type: 'string',
      sortable: true,
    },
    {
      field: 'climate',
      headerName: 'Climate',
      width: 200,
      type: 'string',
      sortable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      type: 'actions',
      getActions: ({ row: { url } }) => [
        <GridActionsCellItem
          icon={<ArrowForwardIcon />}
          label="Open"
          sx={{ color: 'primary.main' }}
          onClick={() =>
            navigate('/star-wars/planets/' + extractPlanetIdFromUrl(url))
          }
        />,
      ],
    },
  ];
};

export const SolarSystem = () => {
  const { error, loading, planets } = usePlanets();
  const columns = useColumns();
  if (error) return <div>Something went wrong...</div>;

  return (
    <Stack spacing={2}>
      {loading && <LinearProgress />}
      <Typography variant="h3" component="h1">
        Solar System
      </Typography>
      <DataGrid getRowId={(row) => row.name} columns={columns} rows={planets} />
    </Stack>
  );
};

const planets: PlanetModel[] = [
  // or: Array<Planet>
  { name: 'Mercury' },
  { name: 'Venus' },
  { name: 'Earth', moons: 1 },
  { name: 'Mars' },
  { name: 'Jupiter', moons: 5 },
  { name: 'Saturn' },
  { name: 'Uranus' },
  { name: 'Neptune' },
];
