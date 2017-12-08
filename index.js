const TelegramBot = require('node-telegram-bot-api');
const roll = require('./bot_modules/roll');
const crypta = require('./bot_modules/crypta');
const reddit = require('./bot_modules/reddit');
const joke = require('./bot_modules/joke');
const _env = require('./env');


const token = _env.key;

const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/roll/, (msg, match) => {
  const chatId = msg.chat.id;
  let min = +msg.text.split(' ')[1];
  let max = +msg.text.split(' ')[2];
  bot.sendMessage(chatId, roll.random((min) ? min : 0, (max) ? max : 100));

});
bot.onText(/\/hi/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Привет, ${msg.from.first_name}`);
});

bot.onText(/\/crypta/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, crypta.price().then(price => bot.sendMessage(chatId, price)));
});

bot.onText(/\/reddit/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, reddit.feeds().then(feed => bot.sendMessage(chatId, feed)));
});

bot.onText(/\/joke/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, joke.get().then(joke => bot.sendMessage(chatId, joke)));
});
