import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import './App.css';

function App() {
  
  const [counter, setCounter] = useState(0);  
  
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);   
  
  return (
    <div className='App'>
      <Button onClickFunction={incrementCounter} increment={1}/> 
      <Button onClickFunction={incrementCounter} increment={5}/> 
      <Button onClickFunction={incrementCounter} increment={10}/> 
      <Button onClickFunction={incrementCounter} increment={100}/>       
      <Display message={counter}/> 
    </div>
  );  
  
}

export default App;