const User = require('../models/User');

class UserService {
  static async createUser(name, password) {
    return await User.create({
      name,
      password,
    });
  }

  static async getAllUsers() {
    return await User.findAll();
  }
}

module.exports = UserService;
