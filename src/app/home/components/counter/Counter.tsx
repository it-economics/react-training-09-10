import { IconButton, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../../../redux/hooks';
import { incrementCounter, useCounter } from '../../slice';

export const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const counter = useCounter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('useEffect body');
    document.title = 'My cool Counter : ' + counter;

    return () => {
      console.log('useEffect cleanup');
    };
  }, [counter]);

  return (
    <Stack direction="row" alignItems="center">
      <Typography>Count: {counter}</Typography>
      <IconButton onClick={() => dispatch(incrementCounter())}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
