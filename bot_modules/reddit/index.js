const axios = require('axios');

module.exports.feeds = (function(category = 'all') {
  axios.get(`https://www.reddit.com/r/${category}/top.json?limit=3`)
    .then(function (response) {
     let posts = response.data.data.children;
     let post1 = `Title: ${posts[0].data.title}\nRating: ${posts[0].data.ups}\nComments: ${posts[0].data.num_comments} \nLink:${posts[0].data.url}\n`;
     let post2 = `Title: ${posts[1].data.title}\nRating: ${posts[1].data.ups}\nComments: ${posts[1].data.num_comments} \nLink:${posts[1].data.url}\n`;
     let post3 = `Title: ${posts[2].data.title}\nRating: ${posts[2].data.ups}\nComments: ${posts[2].data.num_comments} \nLink:${posts[2].data.url}\n`;
     module.exports.content = `Top post from reddit:\n${post1}\n${post2}\n${post3}` ;
    })
    .catch(function (error) {
      console.log(error);
    });
})();
