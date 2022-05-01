// require ('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const COMMAND_TEMPLATE1 = 'template1';
const COMMAND_TEMPLATE2 = 'template2';
const COMMAND_TEMPLATE3 = 'template3';
const COMMAND_TEMPLATE4 = 'template4';
const COMMAND_TEMPLATE5 = 'template5';
let inline_keyboard = [
    [
         {
            text: 'Домашня сторінка',
            callback_data: COMMAND_TEMPLATE1
        },
        {
            text: 'Акушерсько-гінекологічна домопога',
            callback_data: COMMAND_TEMPLATE2
        }

    ],[
        {
            text: 'Жіноча консультація',
            callback_data: COMMAND_TEMPLATE3
        },
        {
            text: 'Терапія',
            callback_data: COMMAND_TEMPLATE4
        },
        {
            text: 'Контактні дані',
            callback_data: COMMAND_TEMPLATE5
        }

    ]
];
const options = {
    polling: true
};
// const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, options);
const bot = new TelegramBot('5397416186:AAEJ0k3OV8lBkckoVon1bio127fmwIrpyyY', options);

bot.setMyCommands([
  {command: '/start', description: 'Домашня сторінка'},
  {command: '/ginecology_help', description: 'Акушерсько-гінекологічна домопога'},
  {command: '/women_consultation', description: 'Жіноча консультація'},
  {command: '/therapy', description: 'Терапія'},
  {command: '/contacts', description: 'Контактні дані'},
])

function process_message(text, chatId) {
  try {
      if (text === '/start') {
          return bot.sendMessage(chatId, "Вітаємо в телеграм-боті КПМ ВМКЛ ЦМ та Д.\nВ розділі меню оберіть пункт, який Вас цікавить:", {
              "reply_markup": {
                  "inline_keyboard": inline_keyboard
              }
          });
      }
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
}

bot.on('message', async msg => {
  const text = msg.text;
  const chatId = msg.chat.id;

  return process_message(text, chatId);

});

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;

  if (action === COMMAND_TEMPLATE1) {
    return bot.sendMessage(msg.chat.id, `Секція жіночої консультації.\nУ нас працюють кваліфіковані акушери-гінекологи, яким Ви можете довіритися. Лікарі з дуже великим стажем роботи, що пройшли тренінги, які володіють усіма сучасними методами прийому пологів\nКонтактна інформація - @VivcharykNV`);
  }
  if (action === COMMAND_TEMPLATE2) {
    return bot.sendMessage(msg.chat.id, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
  }
  if (action === COMMAND_TEMPLATE3) {
    return bot.sendMessage(msg.chat.id, `Секція жіночої консультації.\nУ нас працюють кваліфіковані акушери-гінекологи, яким Ви можете довіритися. Лікарі з дуже великим стажем роботи, що пройшли тренінги, які володіють усіма сучасними методами прийому пологів\nКонтактна інформація - @VivcharykNV`);
  }
  if (action === COMMAND_TEMPLATE4) {
    return bot.sendMessage(msg.chat.id, `Секція терапії.\nТерапевт Вівчарик Налатія Василівна.\nКонтактна інформація - @VivcharykNV`);
  }
  if (action === COMMAND_TEMPLATE5) {
    return bot.sendMessage(msg.chat.id, ` Директор	Присяжнюк Володимир Петрович	65 11 12 \n
                                     \n Медичний директор	Бардаш Леся Юріївна	65 11 22 \n
                                     \n Заступник медичного директора з педіатрії	Опіопченко Світлана Федорівна	65 11 12 \n
                                     \n Заступник директора з економічних питань	Дунаєва Ірина Дмитрівна	65 11 20\n
                                     \nЗаступник директора з технічних питань	Руденко Марина Олександрівна	65 11 23\n
                                     \nГоловна медична сестра	Коваль Ірина Анатоліївна	65 11 36\n
                                     \nГоловний бухгалтер	Костюк Людмила Володимирівна	65 11 19\n
                                     \nНачальник відділу кадрів	Ключківська Тетяна Володимирівна	65 11 36\n`);
  }
});
