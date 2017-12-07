const TelegramBot = require('node-telegram-bot-api');
const roll = require('./bot_modules/roll');
const crypta = require('./bot_modules/crypta');
const reddit = require('./bot_modules/reddit');
const storage = require('./storage/index.json');
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
  bot.sendMessage(chatId, crypta.price);
});
bot.onText(/\/json/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, storage.data[0].location);
});
bot.onText(/\/reddit/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, reddit.content)
});
