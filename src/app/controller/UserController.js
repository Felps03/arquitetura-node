const UserService = require('../service/UserService');

class UserController  {
  async create(req, res) {
    const result = await UserService.create(req.body);
    return res.status(201).json(result)
  }
}

module.exports = new UserController();