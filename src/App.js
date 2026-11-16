import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import SunTimes from './components/SunTimes';
import Forecast from './components/Forecast';
import RecentSearches from './components/RecentSearches';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import Welcome from './components/Welcome';

const API_KEY = '9c8cc6a592cf861b4b8e6292c6d1c0b4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('weather-theme') || 'dark';
  });
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recent-searches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('weather-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('recent-searches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addToRecentSearches = (city) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase());
      return [city, ...filtered].slice(0, 8);
    });
  };

  const removeFromRecent = (city) => {
    setRecentSearches(prev => prev.filter(c => c !== city));
  };

  const fetchWeather = useCallback(async (city) => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`),
        fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)
      ]);

      if (!weatherRes.ok) {
        if (weatherRes.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        } else if (weatherRes.status === 401) {
          throw new Error('Invalid API key. Please add your OpenWeatherMap API key.');
        }
        throw new Error('Failed to fetch weather data. Please try again.');
      }

      const weather = await weatherRes.json();
      const forecast = await forecastRes.json();

      setWeatherData(weather);
      setForecastData(forecast);
      addToRecentSearches(weather.name);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const getDailyForecast = () => {
    if (!forecastData) return [];

    const dailyMap = {};
    forecastData.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];
      const today = new Date().toISOString().split('T')[0];

      if (date === today) return;

      if (!dailyMap[date]) {
        dailyMap[date] = item;
      }
    });

    return Object.values(dailyMap).slice(0, 5);
  };

  const formatTime = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC'
    });
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-title">
          <span className="logo">🌤️</span>
          <h1>Weather Dashboard</h1>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <SearchBar onSearch={fetchWeather} loading={loading} />

      {recentSearches.length > 0 && (
        <RecentSearches
          searches={recentSearches}
          onSelect={fetchWeather}
          onRemove={removeFromRecent}
        />
      )}

      <main className="main-content">
        {loading && <Loading />}

        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !error && !weatherData && <Welcome />}

        {!loading && !error && weatherData && (
          <>
            <CurrentWeather
              data={weatherData}
              formatDate={formatDate}
            />
            <WeatherDetails data={weatherData} />
            <SunTimes
              data={weatherData}
              formatTime={formatTime}
            />
            <Forecast
              dailyForecast={getDailyForecast()}
            />
          </>
        )}
      </main>

      <footer className="footer">
        <p>Built with ⚛️ React | Data from <a href="https://openweathermap.org" target="_blank" rel="noreferrer">OpenWeatherMap</a></p>
      </footer>
    </div>
  );
}

export default App;
