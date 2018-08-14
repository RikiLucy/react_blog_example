const config = require('../config/config');

class UserService {
  static async getUser(id) {
    try {
      const url = `${config.API_URL}/users/${id}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      response = await response;
      response = await response.json();
      
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
