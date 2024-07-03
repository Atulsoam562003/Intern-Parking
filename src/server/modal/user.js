const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  _userId: { type: Number },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  type: { type: String },
});

module.exports = mongoose.model("users", users, "users");

// _userId: Schema.Types.Number,
