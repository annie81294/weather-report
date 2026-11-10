
//create a function to change colors

const changeTempColor = (temp) => {
    if (temp >= 80) return 'temp--red';
    if (temp >= 70) return 'temp--orange';
    if (temp >= 60) return 'temp--yellow';
    if (temp >= 50) return 'temp--green';
    else return 'temp--teal';
};

//increase, decrease bottom
const increase = document.getElementById('increaseTemp');
const decrease = document.getElementById('decreaseTemp');

increase.addEventListener('click', () => {
    temperature++;
    display.textContent = `${temperature}°F`
});


decrease.addEventListener('click', () => {
    temperature--;
    display.textContent = `${temperature}°F`
    
});