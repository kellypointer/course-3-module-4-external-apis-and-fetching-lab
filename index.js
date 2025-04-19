// index.js

// Step 1: Fetch Data from the API
function fetchWeatherData(city) {  // - Create a function `fetchWeatherData(city)`
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7522fd01d95d0916302628d1de75c15a`)
      .then(response => {
          if (!response.ok) {
              throw new Error("City not found or server error");
          }
          return response.json();
      })
      .then(data => {
          displayWeather(data);
          displayError(""); 
      })
      .catch(error => {
          displayError(error.message);
      });
}

function displayWeather(data) {    
    const weatherDetails = document.getElementById("weather-display");
    weatherDetails.innerHTML = "";
    const city = document.createElement("li");
    city.textContent = data.name;
    weatherDetails.appendChild(city);

    const temp = document.createElement("li");
    temp.textContent = data.main.temp;
    weatherDetails.appendChild(temp);

    const humidity = document.createElement("li");
    humidity.textContent = data.main.humidity;
    weatherDetails.appendChild(humidity);

}   
    const button = document.getElementById("fetch-weather");
    button.addEventListener('click', function() { 
        const inputField = document.getElementById("city-input");
        const inputValue = inputField.value;
        fetchWeatherData(inputValue);
      });

      function displayError(message) {
        const errorSection = document.getElementById("error-message");
        errorSection.textContent = message;
        errorSection.style.color = "red";
    }
    
    