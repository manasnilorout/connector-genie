import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import ApiResponse from './ApiResponse';

function HookForm() {
    const [inputValue, setInputValue] = useState('');
    const [apiResponse, setApiResponse] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const getHookMessage = (message) => {
        return message + '\n\n'
            + 'Always call done function in each block\n'
            + 'Always add detailed comments to the response code\n'
            + 'Output only the javascript code in the response no additional text\n'
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://0.0.0.0:3000/ai/get-answer', { message: getHookMessage(inputValue) });
        setApiResponse(response.data.answer);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={inputValue} onChange={handleInputChange} className="input-textarea" /> {/* Use a textarea instead of an input */}
            <button type="submit">Generate Hook</button>
            <ApiResponse response={apiResponse} />
        </form>
    );
}

export default HookForm;