import React, { Component } from 'react';
import { Menu } from '../../components';

class PrivateContainer extends Component {
  render() {
    const { children } = this.props;
    
    return (
      <div className="container">
        <Menu />
        <div className="main">
          {children}
        </div>
      </div>
    );
  }
}

export default PrivateContainer;
