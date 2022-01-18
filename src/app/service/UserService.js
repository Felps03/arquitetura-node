const UserRepository = require('../repository/UserRepository');

class UserService {
  async create(payload) {
    const result = await UserRepository.create(payload);
    return result;
  }
}

module.exports = new UserService();
