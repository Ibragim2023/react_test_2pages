const { Router } = require("express");

const router = Router();

const { contactsController } = require("../Controllers/contacts.controller");

router.get("/contact", contactsController.getContacts);
router.post("/contact", contactsController.postContact);
router.patch("/contact/:id", contactsController.updateContact);
router.delete("/contact/:id", contactsController.deleteContact);

module.exports = router;
