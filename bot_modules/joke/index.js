const axios = require('axios');

module.exports.get = () => axios.get(`https://icanhazdadjoke.com/slack`)
.then( (res) => res.data.attachments[0].text);
