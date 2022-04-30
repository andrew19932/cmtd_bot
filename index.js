// require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

// const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})
// const sequelize = require('./db');
// const UserModel = require('./models');
// const token = new telegram(process.env.TELEGRAM_TOKEN)

const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})

      const start = async () => {
      //   try {
      //     await sequelize.authenticate()
      //     await sequelize.sync()
      // } catch (e) {
      //     console.log('Подключение к бд сломалось', e)
      // }

      bot.setMyCommands([
          {command: '/start', description: 'Домашня сторінка'},
          {command: '/ginecology_help', description: 'Акушерсько-гінекологічна домопога'},
          {command: '/women_consultation', description: 'Жіноча консультація'},
          {command: '/therapy', description: 'Терапія'},
          {command: '/contacts', description: 'Контактні дані'},
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
                      return bot.sendMessage(msg.chat.id, "Вітаємо в телеграм-боті КПМ ВМКЛ ЦМ та Д.\nВ розділі меню оберіть пункт, який Вас цікавить:", {
                          "reply_markup": {
                              "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
                              }
                          });
                      // return bot.sendMessage(chatId, `Вітаємо в телеграм-боті КПМ "ВМКЛ" ЦМ та Д.\nВ розділі меню оберіть пункт, який Вас цікавить:`);
                  }
                  // if (text === '/info') {
                  //     const user = await UserModel.findOne({chatId})
                  //     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name});
                  // }
                  if (text === '/hinecology_help') {
                      return bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
                  }
                  if (text === '/ginecology_help') {
                      return bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
                  }
                  if (text === '/therapy') {
                      return bot.sendMessage(chatId, `Секція терапії.\nТерапевт Вівчарик Налатія Василівна.\nКонтактна інформація - @VivcharykNV`);
                  }
                  if (text === '/women_consultation') {
                      return bot.sendMessage(chatId, `Секція жіночої консультації.\nУ нас працюють кваліфіковані акушери-гінекологи, яким Ви можете довіритися. Лікарі з дуже великим стажем роботи, що пройшли тренінги, які володіють усіма сучасними методами прийому пологів\nКонтактна інформація - @VivcharykNV`);
                  }
                  if (text === '/contacts') {
                      return bot.sendMessage(chatId, ` Директор	Присяжнюк Володимир Петрович	65 11 12 \n
                                                       \n Медичний директор	Бардаш Леся Юріївна	65 11 22 \n
                                                       \n Заступник медичного директора з педіатрії	Опіопченко Світлана Федорівна	65 11 12 \n
                                                       \n Заступник директора з економічних питань	Дунаєва Ірина Дмитрівна	65 11 20\n
                                                       \nЗаступник директора з технічних питань	Руденко Марина Олександрівна	65 11 23\n
                                                       \nГоловна медична сестра	Коваль Ірина Анатоліївна	65 11 36\n
                                                       \nГоловний бухгалтер	Костюк Людмила Володимирівна	65 11 19\n
                                                       \nНачальник відділу кадрів	Ключківська Тетяна Володимирівна	65 11 36\n`);
                  }
                  return bot.sendMessage(chatId, 'Не зрозуміла команда спробуй ще раз!)');
              } catch (e) {
                  return bot.sendMessage(chatId, 'Виникла помилка!)');
              }

          });
       bot.onText(/\/editable/, function onEditableText(msg) {
            const opts = {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: 'Edit Text',
                       // we shall check for this value when we listen
                       // for "callback_query"
                      callback_data: 'edit'
                    }
                  ]
                ]
              }
            };
            bot.sendMessage(msg.from.id, 'Original Text', opts);
          });
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
//
// const main = async () => {
//   const randomTip = await getRandomTip();
//   bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomTip);
//   console.log(randomTip);
}
start()
// main();
