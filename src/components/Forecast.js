import React from 'react';

function Forecast({ dailyForecast }) {
  const getDayName = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getDateStr = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (dailyForecast.length === 0) return null;

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyForecast.map((day, index) => {
          const date = day.dt_txt.split(' ')[0];
          const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <div className="forecast-card" key={index} style={{ animationDelay: `${0.45 + index * 0.05}s` }}>
              <p className="day">{getDayName(date)}</p>
              <p className="day" style={{ fontSize: '0.75rem', opacity: 0.7 }}>{getDateStr(date)}</p>
              <img src={iconUrl} alt={day.weather[0].description} />
              <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
              <p className="forecast-minmax">
                H: {Math.round(day.main.temp_max)}° L: {Math.round(day.main.temp_min)}°
              </p>
              <p className="forecast-desc">{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
