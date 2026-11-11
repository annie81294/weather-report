//create a function to change colors

const changeTempColor = (temp) => {
    if (temp >= 80) return 'temp--red';
    if (temp >= 70) return 'temp--orange';
    if (temp >= 60) return 'temp--yellow';
    if (temp >= 50) return 'temp--green';
    else return 'temp--teal';
};


//create a function to change landscape                            
const changeLandscape = (temp) => {                                 
    if (temp >= 80) return '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';               
    if (temp >= 70) return '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';               
    if (temp >= 60) return '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';                
    else return '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';                        
};  


//increase, decrease bottom
const increase = document.getElementById('increaseTemp');
const decrease = document.getElementById('decreaseTemp');
const display = document.getElementById('temparature_display');   
const landscape = document.getElementById('landscape'); 
let temperature = 68;                                              

increase.addEventListener('click', () => {
    temperature++;
    display.textContent = `${temperature}°F`;
    display.className = changeTempColor(temperature);  
    landscape.textContent = changeLandscape(temperature);            
});


decrease.addEventListener('click', () => {
    temperature--;
    display.textContent = `${temperature}°F`;
    display.className = changeTempColor(temperature);
    landscape.textContent = changeLandscape(temperature);               
});

display.className = changeTempColor(temperature);                  
landscape.textContent = changeLandscape(temperature); 

//change city name
const cityinput = document.getElementById('cityinput')
const changeCity = document.getElementById('changecity');
const cityName = document.querySelector('.cityname_head');

changeCity.addEventListener('click', () => {
    const newcity = cityinput.value;
    cityName.textContent = newcity;
});

//find realtime weather
const LOCATIONIQ_KEY= process.env.LOCATIONIQ_API_KEY;
const OPENWEATHER_KEY= process.env.OPENWEATHER_API_KEY;

const findLatitudeAndLongitude = (query) => {
  return axios.get('https://us1.locationiq.com/v1/search', {
    params: {
      key: LOCATIONIQ_KEY,
      q: query,
      format: 'json'
    }
  })
    .then((response) => {
      const latitude = response.data[0].lat;
      const longitude = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', latitude, longitude);

      return {latitude,longitude};
    })
    .catch( (error) => {
      console.log('error in findLatitudeAndLongitude!');
      throw error;
    });  
};

const findWeather = (latitude, longitude) => {
  return axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      appid: OPENWEATHER_KEY,
      lat: latitude,
      lon: longitude,
      units: 'imperial'
    }
  })
    .then((response) => {
      console.log('success in finding weather!');
      return response.data;
    })
    .catch( (error) => {
      console.log('error in finding weather!');
      throw error;
    });  
};

const realtimeweather = document.getElementById('realtime_weather');

realtimeweather.addEventListener('click', () => {
   const currentcity = cityName.textContent;

   findLatitudeAndLongitude(currentcity)
   .then((coordinates) => {
    return findWeather(
      coordinates.latitude,
      coordinates.longitude
    );
  })

  .then((weather) => {
    console.log(weather);
    display.textContent = `${weather.main.temp}°F`;
  })

  .catch((error) => {
    console.log(error);
    throw error;
  });
});