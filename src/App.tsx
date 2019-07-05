import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import './App.css'

const App: React.FC = () => {
  const handleClick = () => {}
  return (
      <div className="app">
          <Display />
          <ButtonPanel handleClick={handleClick}/>
    </div>
  );
};

export default App;
