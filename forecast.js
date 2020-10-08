
class forecast{
    constructor(){
       this.key='fYp3H8cK1iOhhK4eFarw0AYFF2GpMi4A';
       this.weatherURL ='http://dataservice.accuweather.com/currentconditions/v1/';
       this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)
        return {cityDetails,weather};
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURL + query)
        const data = await response.json();
        return data[0]
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.weatherURL + query)
        const data = await response.json();
        return data[0]
    }
}




// //get city info
// const api_key = 'N69h9R8rSJ3RJzX8nFMYJENl53ph9vKC';
// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${api_key}&q=${city}`
//     const response = await fetch(base + query)
//     const data = await response.json();
//     return data[0]
// }
// //get weather info
// const getWeather = async (id) =>{
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${api_key}`
//     const response = await fetch(base + query)
//     const data = await response.json();
//     return data[0]
// }



