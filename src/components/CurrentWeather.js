import React from 'react';

function CurrentWeather({ data, formatDate }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className="current-weather">
      <div className="weather-info">
        <div className="weather-location">
          <h2>📍 {data.name}</h2>
          <span className="country">{data.sys.country}</span>
        </div>
        <p className="weather-date">{formatDate()}</p>
        <div className="weather-temp">
          <span className="temp-value">{Math.round(data.main.temp)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <p className="weather-desc">{data.weather[0].description}</p>
        <p className="feels-like">Feels like {Math.round(data.main.feels_like)}°C</p>
      </div>
      <div className="weather-icon-container">
        <img src={iconUrl} alt={data.weather[0].description} />
      </div>
    </div>
  );
}

export default CurrentWeather;
