import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './Form.css';
import ApiResponse from './ApiResponse';

function HookForm() {
    const [inputValue, setInputValue] = useState('');
    const [apiResponse, setApiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = 'https://hook-generator.onrender.com';

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
        setIsLoading(true);
        const response = await axios.post(`${baseUrl}/ai/get-answer`, { message: getHookMessage(inputValue) });
        setApiResponse(response.data.answer);
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={inputValue} onChange={handleInputChange} className="input-textarea" /> {/* Use a textarea instead of an input */}
            <button type="submit">Generate Hook</button>
            {isLoading ? <div className="loading-spinner"><BeatLoader /></div> : null}
            <ApiResponse response={apiResponse} />
        </form>
    );
}

export default HookForm;