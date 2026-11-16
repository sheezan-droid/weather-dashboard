import React from 'react';

function Loading() {
  return (
    <>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Fetching weather data...</p>
      </div>
      <div className="skeleton">
        <div className="skeleton-card full"></div>
        <div className="skeleton-card half"></div>
        <div className="skeleton-card half"></div>
      </div>
    </>
  );
}

export default Loading;
