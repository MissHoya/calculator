import React from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import './App.css'

const App: React.FC = () => {
  return (
      <div className="app">
          <Display/>
          <ButtonPanel/>
    </div>
  );
};

export default App;
