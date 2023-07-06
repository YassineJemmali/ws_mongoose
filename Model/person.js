const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number },
  favoriteFoods: [String],
});

module.exports = mongoose.model("User", userSchema);
