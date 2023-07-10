import React from 'react';
import Auth from '../../utils/auth';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={Auth.logout}>Logout</button>
    </div>
  )
};

export default Dashboard;
