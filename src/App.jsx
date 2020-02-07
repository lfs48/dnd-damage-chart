import React from 'react';
import Navbar from './components/navbar';
import Params from './components/params';

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Params />
    </div>
  );
};

export default App;