import './App.css';
import { CongratulationsMessage } from './CongratulationsMessage';
import React ,{useState} from 'react';
import {CounterButton} from './CounterButton';
function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);


  return (
  
    <div className="App">
      <header className="App-header">
      <CongratulationsMessage numberOfClicks = {numberOfClicks} threshold={10}/>
      <CounterButton onIncrement={increment} numberOfClicks = {numberOfClicks}/>
      </header>
    </div>
  );
}

export default App;
