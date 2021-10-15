const UserRepository = require('../repository/UserRepository');

class UserService {
  async create(payload) {
    try {
      const result = await UserRepository.create(payload);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new UserService();
