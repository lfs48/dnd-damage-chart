import React from 'react';
import Navbar from './components/navbar';
import Params from './components/params';
import Character from './components/character';
import Chart from './components/chart';

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Chart/>
      <Character />
      <Params />
    </div>
  );
};

export default App;