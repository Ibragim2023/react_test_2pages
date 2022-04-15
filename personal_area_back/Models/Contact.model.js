const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
