const axios = require('axios');


module.exports.price = () => axios.get('https://api.coinmarketcap.com/v1/ticker/')
  .then(function (response) {

    let data = response.data.map( (val) =>
    `${val.name}: ${val.price_usd}$ [${val.percent_change_1h}% ч.] [${val.percent_change_24h} д.] [${val.percent_change_7d} нед.]  `);
     return `Курсы криптовалют: \n${data[0]}\n${data[1]}\n${data[6]}\n${data[20]}`;
  })
  .catch(function (error) {
    console.log(error);
  });
