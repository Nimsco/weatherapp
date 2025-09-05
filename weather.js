const place = document.getElementById("location")
const searchBtn = document.getElementById("searchBtn")  // 👈 new button
const cityName = document.getElementById("cityName")
const icon = document.getElementById("icon")
const temp = document.getElementById("temp")
const desc = document.getElementById("description")
const feels = document.getElementById("feels-like-info")
const humidity = document.getElementById("humidity-info")
const wind = document.getElementById("wind-info")
const pressure = document.getElementById("pressure-info")
const country = document.getElementById("country")

const getWeatherData = async (city) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ebbd6f2e864e2f290d72664b5d68d02&units=metric`
    const res = await fetch(API)
    const data = await res.json()
    return data
}

// 🔹 A helper function to fetch and update weather
const fetchAndUpdateWeather = async () => {
    const city = place.value || "Kathmandu" // fallback if empty
    const result = await getWeatherData(city)
    addData(result)
}

// Enter key event
place.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        fetchAndUpdateWeather()
        place.value = ""
    }
})

// Search button click event
searchBtn.addEventListener("click", async () => {
    fetchAndUpdateWeather()
    place.value = ""
})

const addData = (data) => {
    if (data.cod !== 200) {
        cityName.textContent = "City not found"
        temp.textContent = ""
        desc.textContent = ""
        feels.textContent = ""
        humidity.textContent = ""
        pressure.textContent = ""
        wind.textContent = ""
        icon.innerHTML = ""
        country.textContent = ""
        return
    }

    cityName.textContent = data.name
    temp.textContent = `${data.main.temp}°C`
    desc.textContent = data.weather[0].description
    feels.textContent = `${data.main.feels_like}°C`
    humidity.textContent = `${data.main.humidity}%`
    pressure.textContent = `${data.main.pressure} hPa`
    wind.textContent = `${data.wind.speed} m/s`
    country.textContent = data.sys.country

    const iconCode = data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    icon.innerHTML = `<img src="${iconUrl}" alt="weather icon">`
}

// Load default city initially
window.addEventListener("DOMContentLoaded", fetchAndUpdateWeather)
