import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserService } from '../../services';

class Menu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
    };
  }
  
  async componentDidMount() {
    try {
      const user = await UserService.getUser(1);
      this.setState({ user });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    const { user } = this.state;
    
    return (
      <div className="menu">
        <Link to="/">my blog</Link>
        {' | '}
        <Link to="/all">all</Link>
        {' | '}
        <Link to="/top">top</Link>
        <span className="username">{user.name} | {user.email}</span>
      </div>
    );
  }
}

export default Menu;
