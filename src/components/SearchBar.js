import React, { useState } from 'react';

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city... (e.g., London, Tokyo, New York)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button className="search-btn" type="submit" disabled={loading}>
          {loading ? '⏳' : '🔍'} {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
