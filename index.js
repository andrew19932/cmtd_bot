// require ('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const COMMAND_TEMPLATE1 = 'template1';
const COMMAND_TEMPLATE2 = 'template2';
const COMMAND_TEMPLATE3 = 'template3';
const COMMAND_TEMPLATE4 = 'template4';
const COMMAND_TEMPLATE5 = 'template5';
const COMMAND_TEMPLATE6 = 'template6';
const COMMAND_TEMPLATE7 = 'template7';
const COMMAND_TEMPLATE8 = 'template8';
let inline_keyboard = [
    [
         {
            text: 'Гінекологія',
            callback_data: COMMAND_TEMPLATE1
        },
        {
            text: 'Жіноча консультація',
            callback_data: COMMAND_TEMPLATE3
        }

    ],[
        {
            text: 'Педіатрія',
            callback_data: COMMAND_TEMPLATE2
        },
        {
            text: 'Терапія',
            callback_data: COMMAND_TEMPLATE4
        },

    ],
    [
      {
          text: 'Дитяча та підліткова гінекологія',
          callback_data: COMMAND_TEMPLATE5
      },
      {
          text: 'Мамологія',
          callback_data: COMMAND_TEMPLATE6
      },
    ],
    [
      {
          text: 'Неонатологія',
          callback_data: COMMAND_TEMPLATE7
      },
      {
          text: 'Підтримка грудного вигодовування',
          callback_data: COMMAND_TEMPLATE8
      },

    ],
];
const options = {
    polling: true
};
// const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, options);
const bot = new TelegramBot('5397416186:AAEJ0k3OV8lBkckoVon1bio127fmwIrpyyY', options);

bot.setMyCommands([
  {command: '/start', description: 'Домашня сторінка'},
  // {command: '/ginecology_help', description: 'Акушерсько-гінекологічна домопога'},
  // {command: '/women_consultation', description: 'Жіноча консультація'},
  // {command: '/therapy', description: 'Терапія'},
  {command: '/contacts', description: 'Контактні дані'},
])

function process_message(text, chatId) {
  try {
      if (text === '/start') {
          return bot.sendMessage(chatId, "Вітаємо в телеграм-боті ВМКЛ Центр Матері та Дитини.\nВ розділі МЕНЮ-контактна інформація закладу.\nОберіть пункт, який Вас цікавить:", {
              "reply_markup": {
                  "inline_keyboard": inline_keyboard
              }
          });
      }
      // if (text === '/hinecology_help') {
      //     return bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
      // }
      // if (text === '/ginecology_help') {
      //     return bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
      // }
      // if (text === '/therapy') {
      //     return bot.sendMessage(chatId, `Секція терапії.\nТерапевт Вівчарик Налатія Василівна.\nКонтактна інформація - @VivcharykNV`);
      // }
      // if (text === '/women_consultation') {
      //     return bot.sendMessage(chatId, `Секція жіночої консультації.\nУ нас працюють кваліфіковані акушери-гінекологи, яким Ви можете довіритися. Лікарі з дуже великим стажем роботи, що пройшли тренінги, які володіють усіма сучасними методами прийому пологів\nКонтактна інформація - @VivcharykNV`);
      // }
      if (text === '/contacts') {
          return bot.sendMessage(chatId, ` Директор	Присяжнюк Володимир Петрович	(0432) 65 11 12 \n
                                           \nРеєстратура АДВ(педіатрія) (0432) 65-11-13\n
                                           \nКлініка, дружня до молоді (0432) 27-33-85\n
                                           \nРеєстратура Жіночої консультації 0988518082\n`);
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
    return bot.sendMessage(msg.chat.id, `Секція гінекології.\nОберіть зі списку лікаря-гінеколога, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE2) {
    return bot.sendMessage(msg.chat.id, `Секція педіатрії.\nОберіть зі списку лікаря-педіатра або вузького спеціаліста, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE3) {
    return bot.sendMessage(msg.chat.id, `Секція жіночої консультації.\nТут ви можете задати питання акушеру-гінекологу з приводу ведення вагітності, постановки на облік та ін.\nОберіть зі списку лікаря, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE4) {
    return bot.sendMessage(msg.chat.id, `Секція терапії.\nТерапевтична допомога вагітним, роділлям та породіллям.\nОберіть зі списку лікаря, до якого бажаєте звернутися:\nТерапевт Вівчарик Наталія Василівна.Контактна інформація - @VivcharykNV`);
  }
  if (action === COMMAND_TEMPLATE5) {
    return bot.sendMessage(msg.chat.id, `Секція дитячої та підліткової гінекології.\nОберіть зі списку лікаря, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE6) {
    return bot.sendMessage(msg.chat.id, `Секція мамології.\nОберіть зі списку лікаря, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE7) {
    return bot.sendMessage(msg.chat.id, `Секція неонатології.\nОберіть зі списку лікаря-неонатогола, до якого бажаєте звернутися:`);
  }
  if (action === COMMAND_TEMPLATE8) {
    return bot.sendMessage(msg.chat.id, `Підтримка грудного вигодовування.\nТут ви можете задати питання фахівцям з грудного вигодовування:`);
  }
});
