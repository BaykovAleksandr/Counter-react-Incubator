import "./App.css";

import { Setter } from "./layout/Setter";
import { Counter } from "./layout/Counter";

function App() {
  return (
    <div className="main">
      <Counter />
      <Setter />
    </div>
  );
}
export default App;
