import React from 'react';
import LogInBttn from './LogInBttn';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="global-nav">
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
        <li>
          <Link className="text btn" to="/tourneys/new">
            New Tourney
          </Link>
        </li>
        <li>
          <LogInBttn />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
