import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formType, setFormType] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('API_URL', { input: inputValue });
    setApiResponse(response.data);
  };

  return (
    <div className="App">
      <button onClick={() => handleButtonClick('hooks')}>Generate JS hooks</button>
      <button onClick={() => handleButtonClick('tests')}>Generate tests for hook</button>
      {formType && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      )}
      <div>{apiResponse}</div>
    </div>
  );
}

export default App;