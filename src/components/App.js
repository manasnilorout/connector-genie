import React, { useState } from 'react';
import HookForm from './HookForm';
import TestForm from './TestForm';
import './App.css';

function App() {
  const [formType, setFormType] = useState(null);

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  const handleHomeClick = () => {
    setFormType(null);
  };

  return (
    <div className="App">
      <div id="menu-bar">
        <button id="home-button" onClick={handleHomeClick}>Home</button>
      </div>
      {!formType && (
        <>
          <button onClick={() => handleButtonClick('hooks')}>Generate JS hooks</button>
          <button onClick={() => handleButtonClick('tests')}>Generate tests for hook</button>
        </>
      )}
      {formType === 'hooks' && <HookForm />}
      {formType === 'tests' && <TestForm />}
    </div>
  );
}

export default App;