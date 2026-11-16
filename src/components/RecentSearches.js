import React from 'react';

function RecentSearches({ searches, onSelect, onRemove }) {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      <div className="recent-tags">
        {searches.map((city, index) => (
          <button
            className="recent-tag"
            key={index}
            onClick={() => onSelect(city)}
          >
            📍 {city}
            <span
              className="remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(city);
              }}
            >
              ✕
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;
