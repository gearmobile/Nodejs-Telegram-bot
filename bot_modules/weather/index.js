const keys = require('../api_keys');
const axios = require('axios');
let city = 'Saratov';
module.exports.city = city;

module.exports.get = () => axios.get(`https://api.apixu.com/v1/current.json?key=${keys.weather}&q=${module.exports.city}`)
  .then(function (response) {
    let weather = response.data;
    let data = `Weather in ${weather.location.name}:\nТемпература: ${weather.current.temp_c} C (чувст. как ${weather.current.feelslike_c} C)\nВетер: ${weather.current.wind_kph} км/час\nВлажность: ${weather.current.humidity}%\nОблачность: ${weather.current.cloud}%\nДата обновления: ${weather.current.last_updated}`;
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
