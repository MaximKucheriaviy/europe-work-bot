const { quession } = require("./messages");
const { createDocButtons } = require("./service");
const { createCandidature } = require("./actions");

const connectOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Viber", callback_data: "Viber_link" },
        { text: "WhatsApp", callback_data: "WhatsApp_link" },
        { text: "Telegram", callback_data: "Telegram_link" },
      ],
    ],
  },
};

const workTypeOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "специалист", callback_data: "special" },
        { text: "не специалист", callback_data: "not_special" },
      ],
    ],
  },
};

const carOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "есть", callback_data: "existCar" },
        { text: "нет", callback_data: "not_existCar" },
      ],
    ],
  },
};

module.exports = async (users = [], index = 0, info) => {
  switch (users[index].qType) {
    case "userName":
      users[index].userName = info;
      users[index].qType = "country";
      process.bot.sendMessage(users[index].id, quession.country);
      return;
    case "country":
      users[index].country = info;
      users[index].qType = "age";
      process.bot.sendMessage(users[index].id, quession.age);
      return;
    case "age":
      users[index].age = info;
      users[index].qType = "phone";
      process.bot.sendMessage(users[index].id, quession.phone);
      return;
    case "phone":
      users[index].age = info;
      users[index].qType = "email";
      process.bot.sendMessage(users[index].id, quession.email);
      return;
    case "email":
      users[index].age = info;
      users[index].qType = "conectType";
      process.bot.sendMessage(
        users[index].id,
        quession.conectType,
        connectOptions
      );
      return;
    case "conectType":
      users[index].conectType = info;
      users[index].qType = "workType";
      process.bot.sendMessage(
        users[index].id,
        quession.workType,
        workTypeOptions
      );
      return;
    case "workType":
      users[index].workType = info;
      users[index].qType = "experience";
      if (info === "special") {
        process.bot.sendMessage(users[index].id, quession.experienceSpecial);
      } else {
        process.bot.sendMessage(users[index].id, quession.experienceNotSpecial);
      }
      return;
    case "experience":
      users[index].experience = info;
      users[index].qType = "documents";
      process.bot.sendMessage(
        users[index].id,
        quession.documents,
        createDocButtons(users[index].documents)
      );
      return;
    case "documents":
      users[index].qType = "languages";
      process.bot.sendMessage(users[index].id, quession.languages);
      return;
    case "languages":
      users[index].languages = info;
      users[index].qType = "carLicense";
      process.bot.sendMessage(users[index].id, quession.carLicense);
      return;
    case "carLicense":
      users[index].carLicense = info;
      users[index].qType = "car";
      process.bot.sendMessage(users[index].id, quession.car, carOptions);
      return;
    case "car":
      users[index].car = info;
      users[index].qType = "additional";
      process.bot.sendMessage(users[index].id, quession.additional);
      return;
    case "additional":
      users[index].additional = info;
      users[index].qType = "finish";
      await createCandidature(users[index]);
      return;
  }
};
