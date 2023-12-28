const apiKey = "115cef540d0c8a0305a57184f97a438f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/Weather Application/images/cloudyimage.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon = "/Weather Application/images/clearimage.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon = "/Weather Application/images/rainimage.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon = "/Weather Application/images/mistimage.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon = "/Weather Application/images/snowimage.png";
    }else{
        weatherIcon = "/Weather Application/images/drizzleimage.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})