const { Candidature } = require("../models");

module.exports = async (info) => {
  await Candidature.create({
    userName: info.userName,
    country: info.country,
    age: info.age,
    phone: info.phone,
    email: info.email,
    conectType: info.conectType,
    experience: info.experience,
    workType: info.workType,
    documents: info.documents,
    languages: info.languages,
    carLicense: info.carLicense,
    car: info.car === "existCar",
    additional: info.additional,
  });
};
