import React, { useState } from 'react';

function GifSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the callback prop with the search term
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a search term:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;