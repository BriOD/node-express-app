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
              <Link className="text" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text" to="/toureys">
                Tourneys
              </Link>
            </li>
            <li>
              <LogInBttn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
