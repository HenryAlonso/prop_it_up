import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard.js'

function App() {
  return (
    <div className="App">
      <h1>Prop it Up!!</h1>
      <PersonCard firstName={"Henry"} lastName={"Alonso"} age={29} hairColor={"Brown"}/>
      <PersonCard firstName={"Myleya"} lastName={"Morton"} age={28} hairColor={"Brown"}/>
      <PersonCard firstName={"Rodney"} lastName={"Jackson"} age={21} hairColor={"Blue"}/>
      <PersonCard firstName={"Bobby"} lastName={"Sullivan"} age={56} hairColor={"Blond"}/>
    </div>
  );
}

export default App;
