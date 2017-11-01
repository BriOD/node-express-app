import React from 'react';
import LogInBttn from './LogInBttn';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="global-nav">
      <div className="global-nav-inner">
        <div className="container">
          <ul className="nav">
            <li>
              <Link className="text btn" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text btn" to="/tourneys">
                Tourneys
              </Link>
            </li>
          </ul>
          <LogInBttn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
