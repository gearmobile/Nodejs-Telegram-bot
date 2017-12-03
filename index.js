const TelegramBot = require('node-telegram-bot-api');
const random = require('./random');
const _env = require('./env');

const token = _env.key;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"

bot.onText(/\/roll/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, random.random());
});
