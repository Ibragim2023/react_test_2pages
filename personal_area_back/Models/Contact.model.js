const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
