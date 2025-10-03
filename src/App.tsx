import { useState } from 'react'
import './App.css'
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  const MAXIMUM = 5;
  const MINIMUM = 0

const onCliCkIncHandler = () => {
  if (count < 5) {
  setCount(count + 1)}}

const onCliCkResetHandler = () => {setCount(0)}
  
  return (
    <div className='wrapper'>
      <p className={count === 5? 'counterRed': 'counter'} >{count}</p>
      <div className="card">
        <Button name={"INC"} callback={onCliCkIncHandler} disabled={count >= MAXIMUM ? true: false}/>
        <Button name={"RESET"} callback={onCliCkResetHandler} disabled={count === MINIMUM? true: false }/>
      </div>
    </div>
  );
}
export default App
