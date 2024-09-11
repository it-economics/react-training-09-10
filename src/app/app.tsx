// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Hello from './components/hello/Hello';
import { Input } from './components/input/Input';

export function App() {
  return (
    <div>
      <Hello name={"Angular"} />
      <Input />
    </div>
  );
}

export default App;
