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