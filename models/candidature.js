const { Schema, model } = require("mongoose");

const DocSchema = new Schema({
  p24: Boolean,
  EUID: Boolean,
  bioUA: Boolean,
  cart: Boolean,
  pollnadWorwVise: Boolean,
  other: Boolean,
});

const CadidatureSchema = new Schema({
  userName: String,
  country: String,
  age: String,
  phone: String,
  email: String,
  conectType: String,
  experience: String,
  workType: String,
  documents: DocSchema,
  languages: String,
  carLicense: String,
  car: Boolean,
  additional: String,
});

module.exports = model("candidature", CadidatureSchema);
