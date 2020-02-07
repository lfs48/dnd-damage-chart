import React from 'react';
import Navbar from './components/navbar';
import Params from './components/params';
import Character from './components/character';

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Character />
      <Params />
    </div>
  );
};

export default App;