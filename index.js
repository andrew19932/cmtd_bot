const TelegramBot = require('node-telegram-bot-api');

const options = {
    polling: true
};
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, options);

const HINECOLOGICAL_HELP = '/hinecology_help';
const GINECOLOGY_HELP = '/ginecology_help';
const WOMEN_CONSULTATION = '/women_consultation';
const THERAPY = '/therapy';
const CONTACTS = '/contacts';

bot.setMyCommands([
    {command: '/start', description: 'Домашня сторінка'},
    {command: GINECOLOGY_HELP, description: 'Акушерсько-гінекологічна домопога'},
    {command: WOMEN_CONSULTATION, description: 'Жіноча консультація'},
    {command: THERAPY, description: 'Терапія'},
    {command: CONTACTS, description: 'Контактні дані'},
    // {command: '/info', description: 'Получить информацию о пользователе'},
    // {command: '/game', description: 'Игра угадай цифру'},
])

function process_message(text, chatId) {
    try {
        if (text === '/start') {
            // await UserModel.create({chatId})
            // await bot.sendSticker(chatId, 'https://vmklcmd.lic.org.ua/wp-content/uploads/2021/04/banner-cruz-azul-saude-1-1.jpg')
            bot.sendMessage(chatId, "Вітаємо в телеграм-боті КПМ ВМКЛ ЦМ та Д.\nВ розділі меню оберіть пункт, який Вас цікавить:", {
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: 'Акушерсько-гінекологічна домопога',
                                callback_data: GINECOLOGY_HELP
                            },
                            {
                                text: 'Жіноча консультація',
                                callback_data: WOMEN_CONSULTATION
                            }
                        ],
                        [
                            {
                                text: 'Терапія',
                                callback_data: THERAPY
                            },
                            {
                                text: 'Контактні дані',
                                callback_data: CONTACTS
                            }
                        ]
                    ]
                }
            });
        } else if (text === HINECOLOGICAL_HELP) {
            bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
        } else if (text === GINECOLOGY_HELP) {
            bot.sendMessage(chatId, `Акушерсько-гінекологічна домопога.\nЛікарі центру проводять комплексну роботу з кожним пацієнтом, що включає консультацію, діагностику на сучасному обладнанні. Це дозволяє підібрати підходи для ефективного лікування.\nКонтактна інформація - mlcentr@ukr.net`);
        } else if (text === THERAPY) {
            bot.sendMessage(chatId, `Секція терапії.\nТерапевт Вівчарик Налатія Василівна.\nКонтактна інформація - @VivcharykNV`);
        } else if (text === WOMEN_CONSULTATION) {
            bot.sendMessage(chatId, `Секція жіночої консультації.\nУ нас працюють кваліфіковані акушери-гінекологи, яким Ви можете довіритися. Лікарі з дуже великим стажем роботи, що пройшли тренінги, які володіють усіма сучасними методами прийому пологів\nКонтактна інформація - @VivcharykNV`);
        } else if (text === CONTACTS) {
            bot.sendMessage(chatId, ` Директор	Присяжнюк Володимир Петрович	65 11 12 \n
                                           \n Медичний директор	Бардаш Леся Юріївна	65 11 22 \n
                                           \n Заступник медичного директора з педіатрії	Опіопченко Світлана Федорівна	65 11 12 \n
                                           \n Заступник директора з економічних питань	Дунаєва Ірина Дмитрівна	65 11 20\n
                                           \nЗаступник директора з технічних питань	Руденко Марина Олександрівна	65 11 23\n
                                           \nГоловна медична сестра	Коваль Ірина Анатоліївна	65 11 36\n
                                           \nГоловний бухгалтер	Костюк Людмила Володимирівна	65 11 19\n
                                           \nНачальник відділу кадрів	Ключківська Тетяна Володимирівна	65 11 36\n`);
        } else {
            bot.sendMessage(chatId, 'Не зрозуміла команда спробуй ще раз!)');
        }
    } catch (e) {
        bot.sendMessage(chatId, 'Виникла помилка!)');
    }
}

bot.onText(/\/start/, function onEditableText(msg) {

    process_message('/start', msg.from.id);
});
bot.onText(/\/ginecology_help/, function onEditableText(msg) {

    process_message(GINECOLOGY_HELP, msg.from.id);
});
bot.onText(/\/women_consultation/, function onEditableText(msg) {

    process_message(WOMEN_CONSULTATION, msg.from.id);
});
bot.onText(/\/therapy/, function onEditableText(msg) {

    process_message(THERAPY, msg.from.id);
});
bot.onText(/\/contacts/, function onEditableText(msg) {

    process_message(CONTACTS, msg.from.id);
});

// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    process_message(action, msg.chat.id);
});
