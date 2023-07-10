import React from 'react';
import Auth from '../../utils/auth';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Username: {Auth.getUser().data.username}</h2>
      <button onClick={Auth.logout}>Logout</button>
    </div>
  )
};

export default Dashboard;
