# 🌦 Weather App

A simple weather web application built with **HTML, CSS, and JavaScript** that fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api).

---

## ✨ Features

* 🌍 Search weather by city name
* 📱 Works on both desktop and mobile (Enter key + Search button)
* 🌡 Displays:

  * Temperature
  * Weather description
  * Feels like temperature
  * Humidity
  * Pressure
  * Wind speed
* 🌤 Dynamic weather icon updates
* 🏩 Shows a default city’s weather (Kathmandu) on page load

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6+)**
* **OpenWeatherMap API**

---

## 🗂️ Project Structure

```
weather-app/
│
├── index.html        # Main HTML file
├── weather.css       # Styling (CSS)
├── weather.js        # Functionality (JavaScript)
├── images/           # Icons used in the app
└── README.md         # Project documentation
```

---

## 🚀 How to Run the Project

1. Clone or download this repository.

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. Navigate to the project folder.

   ```bash
   cd weather-app
   ```
3. Open `index.html` in your browser.

---

## 🔑 API Key Setup

This project uses the **OpenWeatherMap API**.

* Sign up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
* Get your free API key.
* Replace the API key in **`weather.js`**:

  ```js
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY_HERE&units=metric`
  ```

⚠️ Note: The API key is currently hardcoded in the project for simplicity. For production apps, hide the key using a backend server or environment variables.

---

## 📸 Screenshots

### Default City (Kathmandu)

![Default City Screenshot](images/screenshot-default.png)

### Search Example (London)

![Search Screenshot](images/screenshot-london.png)

---

## 📌 Future Improvements

* 🌍 Add geolocation support (auto-detect user’s location)
* 🗕 Show 5-day weather forecast
* 🌈 Improve mobile responsive design
* 🌙 Dark mode support

---

## 👨‍💻 Author

* Nimesh Joshi
* 📧 nimeshjoshi7891@gmail.com

---
