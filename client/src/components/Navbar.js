import React from 'react';
import LogInBttn from './LogInBttn';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="global-nav nav">
      <div className="nav1">
        <Link className="text btn" to="/">
          Home
        </Link>
      </div>
      <div className="nav2">
        <Link className="text btn" to="/tourneys">
          Tourneys
        </Link>
      </div>
      <div className="nav3">
        <Link className="text btn" to="/tourneys/new">
          New Tourney
        </Link>
      </div>
      <div className="nav4">
        <LogInBttn />
      </div>
    </div>
  );
};

export default Navbar;
