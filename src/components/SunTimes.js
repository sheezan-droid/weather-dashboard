import React from 'react';

function SunTimes({ data, formatTime }) {
  return (
    <div className="sun-times">
      <h3>Sunrise & Sunset</h3>
      <div className="sun-info">
        <div className="sun-item">
          <span className="sun-icon">🌅</span>
          <div className="sun-detail">
            <label>Sunrise</label>
            <span>{formatTime(data.sys.sunrise, data.timezone)}</span>
          </div>
        </div>
        <div className="sun-item">
          <span className="sun-icon">🌇</span>
          <div className="sun-detail">
            <label>Sunset</label>
            <span>{formatTime(data.sys.sunset, data.timezone)}</span>
          </div>
        </div>
        <div className="sun-item">
          <span className="sun-icon">☁️</span>
          <div className="sun-detail">
            <label>Cloudiness</label>
            <span>{data.clouds.all}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunTimes;
