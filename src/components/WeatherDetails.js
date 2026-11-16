import React from 'react';

function WeatherDetails({ data }) {
  return (
    <div className="weather-details">
      <h3>Weather Details</h3>
      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-icon">💧</div>
          <div className="detail-info">
            <label>Humidity</label>
            <span>{data.main.humidity}%</span>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">💨</div>
          <div className="detail-info">
            <label>Wind Speed</label>
            <span>{data.wind.speed} m/s</span>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">🌡️</div>
          <div className="detail-info">
            <label>Pressure</label>
            <span>{data.main.pressure} hPa</span>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">👁️</div>
          <div className="detail-info">
            <label>Visibility</label>
            <span>{(data.visibility / 1000).toFixed(1)} km</span>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">🔽</div>
          <div className="detail-info">
            <label>Min Temp</label>
            <span>{Math.round(data.main.temp_min)}°C</span>
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-icon">🔼</div>
          <div className="detail-info">
            <label>Max Temp</label>
            <span>{Math.round(data.main.temp_max)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
