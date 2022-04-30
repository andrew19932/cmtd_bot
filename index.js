// require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

// const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})
// const sequelize = require('./db');
// const UserModel = require('./models');
// const token = new telegram(process.env.TELEGRAM_TOKEN)

const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})

      // const start = async () => {
      //   try {
      //     await sequelize.authenticate()
      //     await sequelize.sync()
      // } catch (e) {
      //     console.log('Подключение к бд сломалось', e)
      // }

      bot.setMyCommands([
          {command: '/start', description: 'Домашня сторінка'},
          {command: '/list', description: 'Список доступних лікарів'},
          {command: '/therapy', description: 'Терапія'},
          {command: '/жіноча консультація', description: 'Секція жіночої консультації'},
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
                  if (text === '/жіноча консультація') {
                      return bot.sendMessage(chatId, `Секція жіночої консультації. Лікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування. Контактна інформація - mlcentr@ukr.net`);
                  }
                  if (text === '/контактні дані') {
                      return bot.sendMessage(chatId, ` Директор	Присяжнюк Володимир Петрович	65 11 12
                                                       Медичний директор	Бардаш Леся Юріївна	65 11 22
                                                       Заступник медичного директора з педіатрії	Опіопченко Світлана Федорівна	65 11 12
                                                       Заступник директора з економічних питань	Дунаєва Ірина Дмитрівна	65 11 20
                                                       Заступник директора з технічних питань	Руденко Марина Олександрівна	65 11 23
                                                       Головна медична сестра	Коваль Ірина Анатоліївна	65 11 36
                                                       Головний бухгалтер	Костюк Людмила Володимирівна	65 11 19
                                                       Начальник відділу кадрів	Ключківська Тетяна Володимирівна	65 11 36`);
                  }
                  return bot.sendMessage(chatId, 'Не зрозуміла команда спробуй ще раз!)');
              } catch (e) {
                  return bot.sendMessage(chatId, 'Виникла помилка!)');
              }

          })
//
// const main = async () => {
//   const randomTip = await getRandomTip();
//   bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomTip);
//   console.log(randomTip);
// }
start()
// main();
