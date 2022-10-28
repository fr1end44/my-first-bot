const { Telegraf } = require('telegraf');
require('dotenv').config();
const text = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));







//STARTER PACK
bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears( 'hi', (ctx) => ctx.reply(`Hello ${ctx.message.from.first_name}`));
bot.hears('hello', (ctx) => ctx.reply(text.commands));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));