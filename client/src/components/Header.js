import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="header">
          <h1>Header</h1>
          <ul className="right">
            <li>
              <a>Log In with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
