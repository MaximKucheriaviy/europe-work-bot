const createDocButtons = (docInfo) => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `Параграф 24 ${docInfo.p24 ? "✅" : ""}`,
            callback_data: "p24_checkboxDoc",
          },
        ],
        [
          {
            text: `Паспорт ЕС ${docInfo.EUID ? "✅" : ""}`,
            callback_data: "EUID_checkboxDoc",
          },
        ],
        [
          {
            text: `Биометрический паспорт (для граждан Украины) ${
              docInfo.bioUA ? "✅" : ""
            }`,
            callback_data: "bioUA_checkboxDoc",
          },
        ],
        [
          {
            text: `Карта побыта ${docInfo.cart ? "✅" : ""}`,
            callback_data: "cart_checkboxDoc",
          },
        ],
        [
          {
            text: `Польская рабочая виза ${
              docInfo.pollnadWorwVise ? "✅" : ""
            }`,
            callback_data: "pollnadWorwVise_checkboxDoc",
          },
        ],
        [
          {
            text: `Другое ${docInfo.other ? "✅" : ""}`,
            callback_data: "other_checkboxDoc",
          },
        ],
        [
          {
            text: `Отправить 📤`,
            callback_data: "docsend",
          },
        ],
      ],
    },
  };
};

module.exports = {
  createDocButtons,
};
