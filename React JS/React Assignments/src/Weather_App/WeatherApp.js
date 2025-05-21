import { useState } from "react";
import { useEffect } from "react";

// Create a Weather App that fetches data from OpenWeatherMap API.
// Display current weather conditions, temperature, and humidity.
// Implement search functionality to fetch weather
// data for different cities.

function WeatherApp() {
  const [cityInput, setCityInput] = useState("");
  const [displayCity, setDisplayCity] = useState("Pune");
  const [weatherData, setWeatherData] = useState({
    weather: "",
    temp: null,
    humidity: "",
  });

  function getData(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ec12b48c6bdc2182cd828271a02978e0`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({
          weather: data.weather[0].description,
          temp: data.main.temp,
          humidity: data.main.humidity,
        });
        setDisplayCity(city);
        setCityInput("")
      })
      .catch((err) => console.log("Error - ", err));
  }

  useEffect(() => {
    getData("Pune");
  }, []);

  return (
    <>
      {/* {getData()} */}
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => {
          setCityInput(e.target.value);
        }}
        value={cityInput}
      />
      <button style={{ marginTop: "10px" }} onClick={()=>getData(cityInput)}>
        Search
      </button>
      <div>
        <h1>{displayCity}</h1>
        <p>Weather: {weatherData.weather}</p>
        <p>Temperature: {weatherData.temp}</p>
        <p>Humidity: {weatherData.humidity}</p>
      </div>
    </>
  );
}

export default WeatherApp;
