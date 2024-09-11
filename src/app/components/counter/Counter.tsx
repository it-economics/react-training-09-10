import { Button, Icon, IconButton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

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
      <IconButton  onClick={() => setCounter((prev) => prev + 1)}><AddIcon/></IconButton>
    </Stack>
  );
};
