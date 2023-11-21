import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import ApiResponse from './ApiResponse';
import './Form.css';

function TestForm() {
  const [inputValue, setInputValue] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = 'https://hook-generator.onrender.com';

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getHookMessage = (message) => {
    return '```javascript\n' + message + '\n```'
    + '\n\nGenerate test cases for above JS hook using ava\n'
    + 'The test cases must start with below typescript code\n'
    + '```typescript\n'
    + 'import * as fs from \'fs\';\n'
    + 'import test from \'ava\';\n'
    + 'import { bodyExecute } from \'@cloudelements/denali\';\n\n'
    + 'const hook = fs.readFileSync(\n'
    + '\'path/to/hook.js\', \'utf8\');\n'
    + '```\n'
    + 'Just output the typescript code, do not provide any strings apart from that';
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.post(`${baseUrl}/ai/get-answer`, { message: getHookMessage(inputValue) });
    setApiResponse(response.data.answer);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={inputValue} onChange={handleInputChange} className="input-textarea" /> {/* Use a textarea instead of an input */}
      <button type="submit">Generate Tests</button>
      {isLoading ? <div className="loading-spinner"><BeatLoader /></div> : null}
      <ApiResponse response={apiResponse} />
    </form>
  );
}

export default TestForm;