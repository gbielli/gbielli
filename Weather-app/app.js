let url = 'https://api.openweathermap.org/data/2.5/weather?q=Toulouse&units=metric&lang=fr&appid=5c37fddcf2e334cfbe70e6760dd88160';

fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        let city = document.querySelector('#city').innerHTML = data.name;
        let temperature = document.querySelector('#degree').innerHTML = Math.round(data.main.temp) + " °C";
        let humidity = document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
        let weatherDescription = document.querySelector('#desc').innerHTML = data.weather[0].description;
        let windSpeed = document.querySelector('#windspeed').innerHTML = data.wind.speed + " km/h";
        
    }) 
);

let aujourdhui = new Date();
let jourMois = aujourdhui.getDate();
let mois = aujourdhui.getMonth();
let annee = aujourdhui.getFullYear();

if (mois == 8) {
    mois = "sept"
}

document.getElementById('date').innerHTML = jourMois + " " + mois + " " + annee;




/** API KEY : 5c37fddcf2e334cfbe70e6760dd88160 */