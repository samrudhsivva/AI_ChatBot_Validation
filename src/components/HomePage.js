// src/Chat.js
import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [input, setInput] = useState('');
    const [responseOne, setResponseOne] = useState('');
    const [responseTwo, setResponseTwo] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // First API call with model gpt-4o-mini
            const resOne = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: input + ' Answer in one word' }],
                stream: false
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_API_KEY`,
                    'Content-Type': 'application/json'
                }
            });

            // Second API call with a different model, for example, text-davinci-003
            const resTwo = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'text-davinci-003',
                messages: [{ role: 'user', content: input + ' Answer in one word' }],
                stream: false
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_API_KEY`,
                    'Content-Type': 'application/json'
                }
            });

            // Store responses
            setResponseOne(resOne.data.choices[0].message.content.trim());
            setResponseTwo(resTwo.data.choices[0].message.content.trim());
            setValidationMessage(''); // Clear validation message on new input
        } catch (error) {
            console.error('Error fetching data from API:', error);
            setResponseOne('Error fetching data from API');
            setResponseTwo('Error fetching data from API');
            setValidationMessage('');
        }
    };

    const handleCompare = () => {
        if (responseOne === responseTwo) {
            setValidationMessage('Validation: true');
        } else {
            setValidationMessage('Validation: false');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                />
                <button type="submit">Send</button>
            </form>
            <div>
                <h3>Response from gpt-4o-mini:</h3>
                <p>{responseOne}</p>
                <h3>Response from text-davinci-003:</h3>
                <p>{responseTwo}</p>
            </div>
            <button onClick={handleCompare}>Compare</button>
            <div>
                <h3>{validationMessage}</h3>
            </div>
        </div>
    );
};

export default HomePage;
