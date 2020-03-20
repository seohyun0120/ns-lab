import React from 'react';
import './App.css';
import FixedTop from './components/FixedTopComponent';
import PersonalColor from './components/personalcolor/PersonalColorComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FixedTop />
      </header>
      <PersonalColor />
    </div>
  );
}

export default App;
