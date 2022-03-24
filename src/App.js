import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [count,setCount] = useState(5)
  const [theme,setTheme] = useState('blue')

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
    setTheme('blue')
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      
        
      </header>
    </div>
  );
}

export default App;
