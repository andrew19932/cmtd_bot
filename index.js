// require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

// const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})
// const UserModel = require('./models');
const token = process.env.TELEGRAM_TOKEN

const bot = new telegram(token, {polling: true})

const start = async () => {

      bot.on('message', async msg => {
              const text = msg.text;
              const chatId = msg.chat.id;

              try {
                  if (text === '/start') {
                      await UserModel.create({chatId})
                      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
                      return bot.sendMessage(chatId, `Вітаю в талеграм боті `);
                  }
                  // if (text === '/info') {
                  //     const user = await UserModel.findOne({chatId})
                  //     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name});
                  // }
                  // if (text === '/game') {
                  //     return startGame(chatId);
                  // }
                  return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
              } catch (e) {
                  return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
              }

          })
}
//
// const main = async () => {
//   const randomTip = await getRandomTip();
//   bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomTip);
//   console.log(randomTip);
// }
start()
// main();
