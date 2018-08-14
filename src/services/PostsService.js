import config from '../config/config.json';

class PostsService {
  static async getPostsByUserId(id) {
    try {
      const url = `${config.API_URL}/posts?_embed=comments&userId=${id}`;
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
  
  static async getAllPosts() {
    try {
      const url = `${config.API_URL}/posts?_embed=comments&_expand=user`;
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
  
  static async getTop10Posts() {
    try {
      const url = `${config.API_URL}/posts?_sort=comments&_order=desc&_limit=10&_embed=comments&_expand=user`;
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
  
  static async getPostById(id) {
    try {
      const url = `${config.API_URL}/posts/${id}?_embed=comments&_expand=user`;
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
  
  static async deletePostById(id) {
    try {
      const url = `${config.API_URL}/posts/${id}`;
      let response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      response = await response.status;
      if (response === 200) return true;
      
      return false;
    } catch (error) {
      throw error;
    }
  }
  
  static async createPost(body) {
    try {
      const url = `${config.API_URL}/posts/`;
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      response = await response;
      response = await response.json();
  
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default PostsService;
