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
const bot = new TelegramBot('5397416186:AAEJ0k3OV8lBkckoVon1bio127fmwIrpyyY', options);

bot.setMyCommands([
  {command: '/start', description: 'Домашня сторінка'},
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
      if (text === '/contacts') {
          return bot.sendMessage(chatId, ` Директор Присяжнюк Володимир Петрович:	(0432)651112 \n
                                           \nРеєстратура АДВ(педіатрія):(0432)651113\n
                                           \nКлініка дружня до молоді: (0432)273385\n
                                           \nРеєстратура жіночої консультації:+380988518082\n`);
      }
      return bot.sendMessage(chatId, 'Незрозуміла команда, спробуйте ще раз!)');
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
    return bot.sendMessage(msg.chat.id, `Секція гінекології.\nОберіть зі списку лікаря-гінеколога, до якого бажаєте звернутися:\n\nЗавідувач відділенням гінекології Іщук Станіслав Іванович- @IshchukSI\n\nДворніцька Марія Миколаївна- @DvornitskaMM\n\nКоцулівська Владислава Юріївна- @kotsulivska\n\nСоловей Олена Анатоліївна- @soloveyelena\n\nЗаболотна Оксана Анатоліївна- @ZabolotnaOksana\n`);
  }
  if (action === COMMAND_TEMPLATE2) {
    return bot.sendMessage(msg.chat.id, `Секція педіатрії.\nОберіть зі списку лікаря-педіатра або вузького спеціаліста, до якого бажаєте звернутися:\n\nПедіатр: Бойчук Денис Віталійович- @dr_denbo\n\nДитячий алерголог: Бучинська Алла Анатоліївна- @BuchinskayaAnya\n\nДитячий нефролог: Гоменюк Віра Василівна- @gomenyk55\n\nДитячий кардіолог: Росощук Оксана Володимирівна- @RososhchukO\n\nДитячий ендокринолог: Пентюк Ганна Петрівна- @Pentukanna\n\nДитячий інфекціоніст: Дудник Наталя Сергіївна - @DudnikNatala\n\nДитячий ЛОР: Штельмах Галина Костянтинівна- @GalinaKonstantinovnaSh\n\nДитячий офтальмолог: Істоміна Ірина Генадіївна- @istominairina6\n\nДитячий невролог: Кушнір Світлана Іванівна-@KusnirSG\n\nДитячий невролог: Тхорівська Олена Миколаївна - @tkhorivska\n\nДитячий невролог: Мутигулліна Марія Андріївна- @MutyhullinaMariya\n\nДитячий невролог: Бойко Надія Сергіївна- @BoikoNadia\n\nДитячий ортопед-травматолог: Котик Сергій Валерійович- @SerhiiKotyk\n\nДитячий ортопед-травматолог: Бойко Ігор Михайлович- @Boiko_IM\n\nДитячий хірург: Мельничук Олександр Васильович- @MelnychukOV\n\nДитячий хірург, уролог: Куцоконь Галина Сергіївна-@KutsokonGalya\n\nДитячий гастроентеролог: Тимчук Євгенія Вікторівна- @TymchukEV`);
  }
  if (action === COMMAND_TEMPLATE3) {
    return bot.sendMessage(msg.chat.id, `Секція жіночої консультації.\nТут ви можете задати питання акушеру-гінекологу з приводу ведення вагітності, постановки на облік та ін.\nОберіть зі списку лікаря, до якого бажаєте звернутися:\n\nЗавідуюча жіночою консультацією Домбровська Жанна Феліксівна: @DombrovskaZhanna\n\nТєтєва Вікторія Олександрівна: @TetevaViktoriia\n\nМайданюк Яна Ігорівна: @yana_maydana\n\nКашпрук Олена Валеріївна: @KashprukOlena\n\nТомашкевич Мирослава Петрівна: @TomashkevychMP`);
  }
  if (action === COMMAND_TEMPLATE4) {
    return bot.sendMessage(msg.chat.id, `Секція терапії.\nТерапевтична допомога вагітним, роділлям та породіллям.\nОберіть зі списку лікаря, до якого бажаєте звернутися:\n\nВівчарик Наталія Василівна : @VivcharykNV\n\nСьомкіна Тетяна Максимівна: @TetianaSMS`);
  }
  if (action === COMMAND_TEMPLATE5) {
    return bot.sendMessage(msg.chat.id, `Секція дитячої та підліткової гінекології.\nОберіть зі списку лікаря, до якого бажаєте звернутися:\n\nОлабіна Наталія Валеріївна: @olabina_nataliia`);
  }
  if (action === COMMAND_TEMPLATE6) {
    return bot.sendMessage(msg.chat.id, `Секція мамології.\nОберіть зі списку лікаря, до якого бажаєте звернутися:\n\nМайданюк Яна Ігорівна: @yana_maydana`);
  }
  if (action === COMMAND_TEMPLATE7) {
    return bot.sendMessage(msg.chat.id, `Секція неонатології.\nОберіть зі списку лікаря-неонатолога, до якого бажаєте звернутися:\n\nКеранчук Лілія Валодимирівна: @LiliyaKer\n\nКобець Олена Михайлівна: @Lenalora\n`);
  }
  if (action === COMMAND_TEMPLATE8) {
    return bot.sendMessage(msg.chat.id, `Підтримка грудного вигодовування.\nТут ви можете задати питання фахівцям з грудного вигодовування:\n\nГоловатюк Марина Олександрівна: @HolovatjukMarina\n\nКащук Лілія Дмитрівна: @KashchukLD`);
  }
});
