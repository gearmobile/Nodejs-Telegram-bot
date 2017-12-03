const TelegramBot = require('node-telegram-bot-api');
const roll = require('./bot_modules/roll');
const help = require('./bot_modules/help');
const _env = require('./env');


const token = _env.key;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"

bot.onText(/\/roll/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, roll.random());
});

bot.onText(/\/hi/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Привет, ${msg.from.first_name}`);
});
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, help.info);
});

 
