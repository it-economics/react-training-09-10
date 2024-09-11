type InputProps = {
  onInputChange: (value: string) => void;
}

export function Input({onInputChange}: InputProps) {
  return (
    <label>
      Input
      <input onChange={(event) => onInputChange(event.target.value)} data-testid={'my-cool-input'}/>
    </label>
  )
}
