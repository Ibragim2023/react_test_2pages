const { Router } = require("express");

const router = Router();

const { contactsController } = require("../Controllers/contacts.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/contact", authMiddleware, contactsController.getContacts);
router.post("/contact", authMiddleware, contactsController.postContact);
router.patch("/contact/:id", authMiddleware, contactsController.updateContact);
router.delete("/contact/:id", authMiddleware, contactsController.deleteContact);

module.exports = router;
