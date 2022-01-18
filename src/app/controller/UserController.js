const UserService = require('../service/UserService');

class UserController  {
  async create(req, res) {
    try {
      const result = await UserService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new UserController();