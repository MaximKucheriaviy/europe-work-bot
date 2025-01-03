const quession = {
  userName: "Имя пользователя",
  country: "Гражданство",
  age: "Возраст",
  phone: "Контактный номер телефона",
  email: "Email",
  conectType: "Выберите удобный способ связи:",
  experienceSpecial:
    "Если вы специалист напишите какова ваша профессия и опыт работы",
  experienceNotSpecial:
    "Если работа неквалифицированная опишите последнее место работы и период сколько вы на ней проработали",
  workType: "Тип работы, которую вы ищете? выберите один из вариантов",
  documents:
    "Укажите какие у вас есть документы для легальной работы в Германии",
  languages: "Какими языками владеете и уровни владения",
  carLicense: "Водительские права (если есть)",
  car: "Есть ли у вас автомобиль?",
  additional:
    "Дополнительная информация о вас (по желанию) Здесь вы можете указать дополнительные пожелания, рассказать о себе или задать вопрос",
};

const docTemplate = function () {
  this.p24 = false;
  this.EUID = false;
  this.bioUA = false;
  this.cart = false;
  this.pollnadWorwVise = false;
  this.other = false;
};

module.exports = {
  m1: "Здравствуйте! Мы рады помочь вам найти работу в Германии. Пожалуйста, заполните короткую анкету, чтобы мы могли предложить вакансии, которые максимально соответствуют вашим навыкам и ожиданиям. Начнём?🇩🇪",
  m2: "Отправляя нам свои личные данные, вы предоставляете согласие на обработку предоставленной информации с целью подбора и обеспечения трудовой деятельности на фирмах и предприятиях Германии.",
  quession,
  docTemplate,
};
