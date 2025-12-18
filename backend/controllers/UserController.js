const UserService = require('../services/UserService');

class UserController {
  static async createUser(req, res) {
    try {
      const { name, password } = req.body;

      if (!name || !password) {
        return res.status(400).json({ message: 'Missing name or password' });
      }

      const user = await UserService.createUser(name, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
