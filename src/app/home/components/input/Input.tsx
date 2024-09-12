import { Box, TextField } from '@mui/material';
import styles from './Input.module.css';

type InputProps = {
  onInputChange: (value: string) => void;
};

export function Input({ onInputChange }: InputProps) {
  return (
    <Box className={styles.container}>
      <TextField
        label="Name Input"
        size="small"
        onChange={(event) => onInputChange(event.target.value)}
        data-testid={'my-cool-input'}
      />
    </Box>
  );
}
