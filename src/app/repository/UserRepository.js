const UserSchema = require('../schema/UserSchema');

class UserRepository  {
  async create(payload) {
    return UserSchema.create(payload);
  }
}

module.exports = new UserRepository();