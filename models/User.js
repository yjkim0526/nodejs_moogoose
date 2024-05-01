const { kMaxLength } = require("buffer");
const moogoose = require("moogoose");

const userSchema = moogoose.getSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = moogoose.model("User", userSchema);

module.exports = { User };
