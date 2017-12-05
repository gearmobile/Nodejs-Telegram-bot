const axios = require('axios');


let bitcoin = axios.get('https://api.coinmarketcap.com/v1/ticker/')
  .then(function (response) {

    let data = response.data.map( (val) => `${val.name}: ${val.price_usd} USD (${val.percent_change_1h}% / ч. | ${val.percent_change_24h}% /д.) | ${val.percent_change_7d}% /н.)`);
    module.exports.price = `Курсы криптовалют: \n${data[0]}\n${data[1]}`;
  })
  .catch(function (error) {
    console.log(error);
  });
