const { Router } = require("express");

const router = Router();

const { usersController } = require("../Controllers/users.controller");

router.get("/users", usersController.getUsers);
router.post("/users", usersController.registerUser);
router.post("/login", usersController.login);
router.delete("/users/:id", usersController.deleteUser);


module.exports = router;
