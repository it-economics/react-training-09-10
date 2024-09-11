import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const fetchNewJoke = () =>
  fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((response) => response.json() as unknown as JokeResponse)
    .then((data) => data.value);

export function Joke() {
  const [joke, setJoke] = useState<string>();
  const [error, setError] = useState(false);

  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h2">
        Chuck Norris Jokes!
      </Typography>
      <Button
        onClick={() => {
          setError(false);
          return fetchNewJoke()
            .then(setJoke)
            .catch(() => setError(true));
        }}
      >
        New Joke
      </Button>
      {error && <Typography color="error">Failed to fetch joke</Typography>}
      {joke && (
        <Stack direction={'row'} spacing={2}>
          <Typography>Current Joke:</Typography>
          <Typography>{joke}</Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default Joke;

type JokeResponse = {
  value: string;
};
