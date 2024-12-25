const TelegramBot = require("node-telegram-bot-api");
const { m1, m2 } = require("./messages");
require("dotenv").config();

let users = [];

const { BOT_ID } = process.env;
const bot = new TelegramBot(BOT_ID, { polling: true });

console.log("Bot created");

bot.on("message", (params) => {
  const { text, chat } = params;
  console.log(text);

  switch (text) {
    case "/start":
      users = users.filter((item) => item.id === chat.id);
      bot.sendMessage(chat.id, m1);
      const options = {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Да, я согласен(на)", callback_data: "policy_accept" }],
          ],
        },
      };
      bot.sendMessage(chat.id, m2, options);

      break;
  }
});
bot.on("callback_query", (text) => {
  const { data, from } = text;
  switch (data) {
    case "policy_accept":
      if (users.some((item) => item.id === from.id)) {
        return;
      }
      users.push({ id: from.id });
      break;
  }
  console.log(users);
});
