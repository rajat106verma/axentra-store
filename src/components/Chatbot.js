import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            Authorization: 'Bearer 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',
          },
        }
      );
      setResponse(result.data.choices[0].message.content);
    } catch (err) {
      setResponse('Something went wrong.');
    }
  };

  return (
    <div className="container my-4">
      <h4>Ask our AI Stylist</h4>
      <input
        className="form-control my-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask for outfit suggestions..."
      />
      <button className="btn btn-success" onClick={sendMessage}>Ask</button>
      <p className="mt-3">{response}</p>
    </div>
  );
}
