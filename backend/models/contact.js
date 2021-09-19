const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subject: String,
  message: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
