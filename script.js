const inputbox = document.querySelector("#inputbox");
const button = document.querySelector(".button");
const cityElement = document.querySelector(".City");
const stateElement = document.querySelector(".state");
const countryElement = document.querySelector(".country");
const temperture = document.querySelector("#temp");
const Humidity = document.querySelector("#humidity");
const Hightemp = document.querySelector(".high-temp");
const Wind = document.querySelector(".wind");
const Sunrise = document.querySelector(".Sunrise");
const Lowtemp = document.querySelector(".low-temp");
const Rain = document.querySelector(".rain");
const Sunset = document.querySelector(".sunset");

const Mainimage = document.querySelector(".cloudy");

const Temp7 = document.querySelector(".temp7");
const Img7 = document.querySelector(".img7");
const Temp8 = document.querySelector(".temp8");
const Img8 = document.querySelector(".img8");
const Temp9 = document.querySelector(".temp9");
const Img9 = document.querySelector(".img9");

const Temp10 = document.querySelector(".temp10");
const Img10 = document.querySelector(".img10");

const Temp11 = document.querySelector(".temp11");
const Img11 = document.querySelector(".img11");
const Temp12 = document.querySelector(".temp12");
const Img12 = document.querySelector(".img12");
const Temp13 = document.querySelector(".temp13");
const Img13 = document.querySelector(".img13");
const Temp14 = document.querySelector(".temp14");
const Img14 = document.querySelector(".img14");

const Date1 = document.querySelector(".date");
const day = document.querySelector('.day')
const vel = document.querySelector('.vel')

const Condition = document.querySelector(".condition");


const url =
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d81f4139eemsha92078abed4b1c1p1a6aeejsn804ebd9bf0c5",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const addWeather = (city) => {
  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`,
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      cityElement.innerHTML = data.location.name;
stateElement.innerHTML = data.location.region;
countryElement.innerHTML = data.location.country;
temperture.innerHTML = data.current.temp_c;
Mainimage.src = data.current.condition.icon;
Humidity.innerHTML = data.current.humidity;
Wind.innerHTML = data.current.wind_mph;
Sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;
Sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
Hightemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
Lowtemp.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
Rain.innerHTML = data.forecast.forecastday[0].day.daily_will_it_rain;

Temp7.innerHTML = data.forecast.forecastday[0].hour[6].temp_c;
Img7.src = data.forecast.forecastday[0].hour[6].condition.icon;

Temp8.innerHTML = data.forecast.forecastday[0].hour[8].temp_c;
Img8.src = data.forecast.forecastday[0].hour[8].condition.icon;

Temp9.innerHTML = data.forecast.forecastday[0].hour[10].temp_c;
Img9.src = data.forecast.forecastday[0].hour[10].condition.icon;

Temp10.innerHTML = data.forecast.forecastday[0].hour[12].temp_c;
Img10.src = data.forecast.forecastday[0].hour[12].condition.icon;

Temp11.innerHTML = data.forecast.forecastday[0].hour[14].temp_c;
Img11.src = data.forecast.forecastday[0].hour[14].condition.icon;

Temp12.innerHTML = data.forecast.forecastday[0].hour[16].temp_c;
Img12.src = data.forecast.forecastday[0].hour[16].condition.icon;

Temp13.innerHTML = data.forecast.forecastday[0].hour[18].temp_c;
Img13.src = data.forecast.forecastday[0].hour[18].condition.icon;

Temp14.innerHTML = data.forecast.forecastday[0].hour[20].temp_c;
Img14.src = data.forecast.forecastday[0].hour[20].condition.icon;



Date1.innerHTML = new Date(data.location.localtime).toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric'})
day.innerHTML = new Date(data.location.localtime).toLocaleString('default', {weekday: 'long'})
vel.innerHTML =  new Date(data.location.localtime).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })


Condition.innerHTML = data.current.condition.text;
    });
};

addWeather("mumbai");


button.addEventListener('click', (e)=>{
    e.preventDefault()
    // button la click kelyananter addweather function run zala pahije
    addWeather(inputbox.value)
})



