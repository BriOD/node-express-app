import React from 'react';
import { Link } from 'react-router-dom';
import TourneyList from './TourneyList';

const Dashboard = () => {
  return (
    <div>
      <TourneyList />
      <Link to="tourneys/new">Add New Tourney</Link>
    </div>
  );
};

export default Dashboard;
