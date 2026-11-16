# 🌤️ Weather Dashboard

A beautiful, responsive weather dashboard built with **React.js** that provides real-time weather data and 5-day forecasts for any city worldwide.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3)
![API](https://img.shields.io/badge/API-OpenWeatherMap-orange?style=for-the-badge)

## ✨ Features

- 🔍 **City Search** — Search weather for any city worldwide
- 🌡️ **Current Weather** — Temperature, humidity, wind speed, pressure & more
- 📅 **5-Day Forecast** — Daily weather predictions with icons
- 🌅 **Sunrise & Sunset** — Local sun times for the searched city
- 🌙 **Dark/Light Mode** — Toggle between themes, preference saved in localStorage
- 🕐 **Recent Searches** — Quick access to previously searched cities
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 💫 **Glassmorphism UI** — Modern, frosted-glass design with smooth animations
- ⚠️ **Error Handling** — User-friendly error messages for invalid inputs

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| CSS3 | Styling (Custom Properties, Flexbox, Grid) |
| OpenWeatherMap API | Weather data |
| localStorage | Theme & search history persistence |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sheezan-droid/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Copy your API key

4. **Add your API key**
   - Open `src/App.js`
   - Replace `YOUR_API_KEY` with your actual API key:
     ```javascript
     const API_KEY = 'your_actual_api_key_here';
     ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js        # City search input
│   │   ├── CurrentWeather.js   # Current weather display
│   │   ├── WeatherDetails.js   # Humidity, wind, pressure etc.
│   │   ├── SunTimes.js         # Sunrise & sunset times
│   │   ├── Forecast.js         # 5-day forecast cards
│   │   ├── RecentSearches.js   # Recent search tags
│   │   ├── Loading.js          # Loading spinner & skeleton
│   │   ├── ErrorMessage.js     # Error display
│   │   └── Welcome.js          # Welcome/landing state
│   ├── App.js                  # Main app component
│   ├── App.css                 # App styles
│   └── index.css               # Global styles & animations
└── README.md
```

## 🎨 UI Highlights

- **Glassmorphism Design** — Frosted glass cards with blur effects
- **Dynamic Animations** — Fade-in, float, shimmer loading effects
- **Gradient Accents** — Purple-blue gradient theme
- **Responsive Grid** — CSS Grid layout adapting to all screen sizes
- **Custom Scrollbar** — Styled scrollbar matching the theme

## 📸 Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| Modern dark theme with glass effects | Clean light theme |

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, give it a star!**
