const axios = require("axios");

const URL =
  "http://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&APPID=ae45492188698ff6c35c430a814ed78b";

axios
  .get(URL)
  .then(res => {
    const temp = Math.round(res.data.main.temp);
    const weather = res.data.weather[0];
    const time =
      new Date().getHours() >= 18 || new Date().getHours() <= 6 ? "" : "";

    let weatherIcon;

    if (
      (weather.id >= 500 && weather.id <= 531) ||
      (weather.id >= 200 && weather.id <= 232) ||
      (weather.id >= 300 && weather.id <= 321)
    )
      weatherIcon = "";
    else if (weather.id >= 803 && weather.id <= 804) weatherIcon = "";
    else if (weather.id >= 800 && weather.id <= 802) {
      weatherIcon = time;
    }

    console.log(`${weatherIcon}  ${temp}°`);
  })
  .catch(err => {
    console.log(" --°");
  });
