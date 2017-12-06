const TelegramBot = require('node-telegram-bot-api');
const roll = require('./bot_modules/roll');
const help = require('./bot_modules/help');
const crypta = require('./bot_modules/crypta');
const reddit = require('./bot_modules/reddit');
const _env = require('./env');


const token = _env.key;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
// Matches "/echo [whatever]"

bot.onText(/\/roll/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, roll.random());
});
bot.onText(/\/toss/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, roll.toss());
});
bot.onText(/\/hi/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Привет, ${msg.from.first_name}`);
});
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, help.info);
});

bot.onText(/\/crypta/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, crypta.price);
});



bot.onText(/\/reddit (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  reddit.category = match[1];
  bot.sendMessage(chatId, reddit.feeds);
});

bot.onText(/\/test (.+)/, (msg, match) => {bot.sendMessage(msg.chat.id, match[1]*2)});
