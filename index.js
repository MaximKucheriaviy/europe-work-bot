const TelegramBot = require("node-telegram-bot-api");
const { m1, m2, quession, docTemplate } = require("./messages");
const { createDocButtons } = require("./service");
const infoColector = require("./infoColector");

require("dotenv").config();

let users = [];

const { BOT_ID } = process.env;
const bot = new TelegramBot(BOT_ID, { polling: true });
process.bot = bot;

console.log("Bot created");

bot.on("message", (params) => {
  const { text, chat } = params;
  console.log(text);

  switch (text) {
    case "/start":
      users = users.filter((item) => item.id !== chat.id);
      bot.sendMessage(chat.id, m1);
      const options = {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Да, я согласен(на)", callback_data: "policy_accept" }],
          ],
        },
      };
      bot.sendMessage(chat.id, m2, options);
      return;
  }
  const index = users.findIndex((item) => item.id === chat.id);
  if (
    index === -1 ||
    users[index].qType === "conectType" ||
    users[index].qType === "workType" ||
    users[index].qType === "documents" ||
    users[index].qType === "car"
  ) {
    return;
  }

  infoColector(users, index, text);
});
bot.on("callback_query", (text) => {
  const { data, from } = text;
  switch (data) {
    case "policy_accept":
      if (users.some((item) => item.id === from.id)) {
        return;
      }
      users.push({
        id: from.id,
        qType: "userName",
        documents: new docTemplate(),
      });
      bot.sendMessage(from.id, quession.userName);
      return;
  }
  const index = users.findIndex((item) => item.id === from.id);
  if (index === -1) {
    return;
  }

  if (
    data.includes("_link") ||
    data.includes("special") ||
    data.includes("docsend") ||
    data.includes("existCar")
  ) {
    infoColector(users, index, data);
  } else if (data.includes("_checkboxDoc")) {
    const type = data.split("_")[0];
    users[index].documents[type] = !users[index].documents[type];
    console.log(users[index].documents, type);

    bot.editMessageReplyMarkup(
      createDocButtons(users[index].documents).reply_markup,
      {
        chat_id: text.message.chat.id,
        message_id: text.message.message_id,
      }
    );
  }
});
