const Contact = require("../Models/Contact.model");

module.exports.contactsController = {
  getContacts: async (req, res) => {
    try {
      const showContacts = await Contact.find();
      res.json(showContacts);
    } catch (error) {
      console.log(error);
    }
  },
  postContact: async (req, res) => {
    try {
      await Contact.create({
        text: req.body.text,
        number: req.body.number,
      });
      res.json("Контакт успешно добавлен");
    } catch (error) {
      console.log(error);
    }
  },
  updateContact: async (req, res) => {
    try {
      await Contact.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        number: req.body.number,
      });
      res.json("Контакт успешно изменен")
    } catch (error) {
        console.log(error);
    }
  },
  deleteContact: async (req, res) => {
      try {
          await Contact.findByIdAndRemove(req.params.id)
          res.json("Контакт успешно удален")
      } catch (error) {
          console.log(error);
      }
  }
};
