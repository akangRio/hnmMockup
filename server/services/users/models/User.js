const { ObjectId } = require("mongodb");
const { getDatabase, disconnectDb } = require("../config/mongoConnection");

class User {
  static async getCollection() {
    const db = await getDatabase();
    const selectUsers = await db.collection("users");
    return selectUsers;
  }

  static async getAllUsers() {
    const users = await (await this.getCollection()).find().toArray();
    console.log(users);
    return users;
  }

  static async newUser(data) {
    const uniqueEmail = await (
      await this.getCollection()
    ).findOne({
      email: data.email,
    });
    // console.log(uniqueEmail);
    if (uniqueEmail) throw { name: "Email must be Unique" };
    const insertUser = (await this.getCollection()).insertOne(data);
    return insertUser;
  }

  static async deleteUser(id) {
    const destroy = await (
      await this.getCollection()
    ).deleteOne({
      _id: new ObjectId(id),
    });
    return destroy;
  }

  static async oneUser(id) {
    const user = await (
      await this.getCollection()
    ).findOne({ _id: new ObjectId(id) });
    return user;
  }
}

module.exports = User;
