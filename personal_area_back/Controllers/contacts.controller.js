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
      const { text, number } = req.body;
      const contact = await Contact.create({
        text: text,
        number: number,
        userId: req.user.id,
      });
      res.json(contact);
    } catch (error) {
      console.log(error);
    }
  },
  updateContact: async (req, res) => {
    try {
      const { text, number } = req.body;
      const contact = await Contact.findByIdAndUpdate(req.params.id, {
        text: text,
        number: number,
      });
      if (req.user.id === contact.userId.toString()) {
        res.json("Контакт успешно изменен");
      }
    } catch (error) {
      res.status(401).json("Нет доступа к такой операции");
    }
  },
  deleteContact: async (req, res) => {
    try {
      const contact = await Contact.findByIdAndRemove(req.params.id);
      if (req.user.id === contact.userId.toString()) {
        res.json("Контакт успешно удален");
      }
    } catch (error) {
      res.status(401).json("Нет доступа к такой операции");
    }
  },
};
