
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const Forecast = new forecast();
console.log(Forecast)


const updateUI = (data) =>{
    console.log(data)
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //destructure properties
    const {cityDetails,weather} = data

    //update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    //update the night/day img & icon img
    const iconSRC = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSRC)
    let timeSRC = weather.IsDayTime ? '/Weather project/img/day.svg' : '/Weather project/img/night.svg'
    time.setAttribute('src',timeSRC)
    


    //remove display-none class if preset
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

// const updateCity = async (city) =>{

//     const cityDetails = await getCity(city)
//     const weather = await getWeather(cityDetails.Key)
    
//     return {
//       cityDetails: cityDetails,
//       weather: weather
//     };
    
// }

cityForm.addEventListener('submit',e => {
    e.preventDefault()
    //get city value
    const city = cityForm.city.value.toLowerCase().trim()
    cityForm.reset()

    //update the ui with new city
    Forecast.updateCity(city).then(data => updateUI(data))
     .catch(err=>console.log(err))

     //set local storage
     localStorage.setItem('city',city);  
})

if(localStorage.getItem('city')){
    Forecast.updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err))
}





