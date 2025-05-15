import React, { useState } from 'react';

function ChatInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Send</button>
    </form>
  );
}

export default ChatInput;
