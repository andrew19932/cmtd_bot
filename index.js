// require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

// const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})
// const sequelize = require('./db');
// const UserModel = require('./models');
// const token = new telegram(process.env.TELEGRAM_TOKEN)

const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})

      const start = async () => {
        try {
          await sequelize.authenticate()
          await sequelize.sync()
      } catch (e) {
          console.log('Подключение к бд сломалось', e)
      }

      bot.setMyCommands([
          {command: '/start', description: 'Домашня сторінка'},
          {command: '/list', description: 'Список доступних лікарів'},
          {command: '/therapy', description: 'Терапія'},
          // {command: '/info', description: 'Получить информацию о пользователе'},
          // {command: '/game', description: 'Игра угадай цифру'},
      ])

      bot.on('message', async msg => {
              const text = msg.text;
              const chatId = msg.chat.id;

              try {
                  if (text === '/start') {
                      // await UserModel.create({chatId})
                      // await bot.sendSticker(chatId, 'https://vmklcmd.lic.org.ua/wp-content/uploads/2021/04/banner-cruz-azul-saude-1-1.jpg')
                      return bot.sendMessage(chatId, `Вітаємо в талеграм боті Центру матері та дитини`);
                  }
                  // if (text === '/info') {
                  //     const user = await UserModel.findOne({chatId})
                  //     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name});
                  // }
                  if (text === '/therapy') {
                      return bot.sendMessage(chatId, `Секція терапії. Терапевт Вівчарик Налатія Василівна. Контактна інформація - @VivcharykNV`);
                  }
                  if (text === '/list') {
                      return bot.sendMessage(chatId, `Акушер гінеколог, Педіатр, Терапевт`);
                  }
                  return bot.sendMessage(chatId, 'Не зрозуміла команда спробуй ще раз!)');
              } catch (e) {
                  return bot.sendMessage(chatId, 'Виникла помилка!)');
              }

          })
          // Handle callback queries
      bot.on('callback_query', function onCallbackQuery(callbackQuery) {
        const action = callbackQuery.data;
        const msg = callbackQuery.message;
        const opts = {
          chat_id: msg.chat.id,
          message_id: msg.message_id,
        };
        let text;

        if (action === 'edit') {
          text = 'Edited Text';
        }

        bot.editMessageText(text, opts);
      });
}
//
// const main = async () => {
//   const randomTip = await getRandomTip();
//   bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomTip);
//   console.log(randomTip);
// }
start()
// main();
