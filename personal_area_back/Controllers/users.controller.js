const User = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const showUsers = await User.find();
      res.json(showUsers);
    } catch (error) {
      console.log(error);
    }
  },
  registerUser: async (req, res) => {
    try {
      const { name, lastname, email, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({
        name,
        lastname,
        email,
        password: hash,
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (!candidate) {
        return res.status(401).json("Неверный логин");
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
      };

      const token = await jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "72h",
      });

      res.json({
        token: token,
      })

    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id)
      res.json("Юзер удален")
    } catch (error) {
      console.log(error);
    }
  }
};
