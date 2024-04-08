/*{
    "coord": {
        "lon": 77.2167,
        "lat": 28.6667
    },
    "weather": [
        {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 21.05,
        "feels_like": 20.57,
        "temp_min": 21.05,
        "temp_max": 21.05,
        "pressure": 1015,
        "humidity": 52
    },
    "visibility": 3500,
    "wind": {
        "speed": 2.06,
        "deg": 320
    },
    "clouds": {
        "all": 58
    },
    "dt": 1710699302,
    "sys": {
        "type": 1,
        "id": 9165,
        "country": "IN",
        "sunrise": 1710637107,
        "sunset": 1710680431
    },
    "timezone": 19800,
    "id": 1273294,
    "name": "Delhi",
    "cod": 200
}
*/
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "9101b99453ce1f7069988d2a39a6c4e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        var data = await response.json();
    // console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" Km/h";
    // document.querySelector('.weather-icon').innerHTML=data.wind.speed"

    if(data.weather[0].main == "Clouds"){weatherIcon.src = 'images/clouds.png';}
    else if(data.weather[0].main == "Clear"){weatherIcon.src = 'images/clear.png';}
    else if(data.weather[0].main == "Rain"){weatherIcon.src = 'images/clear.png';}
    else if(data.weather[0].main == "Drizzle"){weatherIcon.src = 'images/drizzle.png';}
    else if(data.weather[0].main == "Mist"){weatherIcon.src = 'images/mist.png';}
    else if(data.weather[0].main == "Humidity"){weatherIcon.src = 'images/humidity.png';}
    else if(data.weather[0].main == "Snow"){weatherIcon.src = 'images/snow.png';}

    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display = "none";
    }
    

}

searchBtn.addEventListener('click',()=>{checkWeather(searchBox.value);})