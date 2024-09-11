import styles from './Input.module.css';

type InputProps = {
  onInputChange: (value: string) => void;
}

export function Input({onInputChange}: InputProps) {
  return (
    <div className={styles.container}>
    <label>
      Input
      <input onChange={(event) => onInputChange(event.target.value)} data-testid={'my-cool-input'}/>
    </label>
    </div>
  )
}
