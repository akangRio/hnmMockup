const User = require("../models/User");

class Controller {
  static async getUsers(req, res, next) {
    try {
      const users = await User.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async postUser(req, res, next) {
    try {
      const data = req.body;
      const keysToCheck = [
        "username",
        "email",
        "password",
        "role",
        "phoneNumber",
        "address",
      ];
      const test = keysToCheck.every((e) => data.hasOwnProperty(e));
      if (!test) throw { name: "Bad Request" };
      const validatedData = Object.values(data).every((e) => e !== (null || ""))
        ? data
        : false;
      if (!validatedData) throw { name: "Empty Field" };
      const insertUser = await User.newUser(validatedData);
      res.status(201).json({
        message: "New User has been created",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async delUser(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const delUser = await User.deleteUser(id);
      console.log(delUser);
      if (delUser.deletedCount < 1) throw { name: "Not Found" };
      res.status(200).json({
        message: "Deleted User",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;

      const user = await User.oneUser(id);
      if (!user) {
        throw { name: "Not Found" };
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
