let now = new Date();
let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let currentDay = day[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let time = document.querySelector("#time");
time.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

function temperatureReturn(response) {
    let h2 = document.querySelector("#main-city");
    let temperature = Math.round(response.data.main.temp);
    let h1 = document.querySelector("#h1");
    let humidity = document.querySelector("#humidity");
    let humiditypercent = response.data.main.humidity;
    let type = document.querySelector("#type");
    let typesource = response.data.weather[0].description;
    let wind = document.querySelector("#wind");
    let windspeed = Math.round(response.data.wind.speed);
    h1.innerHTML = `${temperature}°C`;
    h2.innerHTML = `${response.data.name}`;
    humidity.innerHTML = `${humiditypercent}`;
    type.innerHTML = `${typesource}`;
    wind.innerHTML = `${windspeed}`;
}

function city(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-city-input");
    let mainCity = document.querySelector("#main-city");
    mainCity.innerHTML = `${cityInput.value}`;
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(temperatureReturn);
}
let search = document.querySelector("#search-city");
search.addEventListener("submit", city);

function planC() {
    let planCEvent = document.querySelector(".four")
    planCEvent.innerHTML = `4`
}

let cels = document.querySelector("#c");
cels.addEventListener("click", planC);

function currentTemperatureReturn(response) {
    let curh2 = document.querySelector("#main-city");
    let curtemperature = Math.round(response.data.main.temp);
    let curh1 = document.querySelector("#h1");
    let curhumidity = document.querySelector("#humidity");
    let curhumiditypercent = response.data.main.humidity;
    let curtype = document.querySelector("#type");
    let curtypesource = response.data.weather[0].description;
    let curwind = document.querySelector("#wind");
    let curwindspeed = Math.round(response.data.wind.speed);
    curh1.innerHTML = `${curtemperature}°C`;
    curh2.innerHTML = `${response.data.name}`;
    curhumidity.innerHTML = `${curhumiditypercent}`;
    curtype.innerHTML = `${curtypesource}`;
    curwind.innerHTML = `${curwindspeed}`;
}
  
function myPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKeyCurrent = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyCurrent}&units=metric`;
    axios.get(apiUrlCurrent).then(currentTemperatureReturn);
}
function getCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(myPosition);
}

let button = document.querySelector(".button-2");
button.addEventListener("click", getCurrent);