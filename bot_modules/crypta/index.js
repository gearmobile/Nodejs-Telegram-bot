const axios = require('axios');

module.exports.coin = 'bitcoin';
module.exports.price = () => axios.get(`https://api.coinmarketcap.com/v1/ticker/${module.exports.coin}`)
  .then(function (response) {
   let coin = response.data[0];
   return `Rank: ${coin.rank}\nName: ${coin.name}\nPrice: ${coin.price_usd}$\nChanges: (1h) ${coin.percent_change_1h}% (24h) ${coin.percent_change_24h}% (7d) ${coin.percent_change_7d}%\nLast update: ${Date(coin.last_updated * 1000)}`;
  })
  .catch(function (error) {
    console.log(error);
  });

  [{"id":"bitcoin","name":"Bitcoin","symbol":"BTC","rank":"1","price_usd":"16409.7","price_btc":"1.0","24h_volume_usd":"13015000000.0","market_cap_usd":"275094672255","available_supply":"16764150.0","total_supply":"16764150.0","max_supply":"21000000.0","percent_change_1h":"1.71","percent_change_24h":"17.09","percent_change_7d":"-9.43","last_updated":"1514307261"}]
