import React from "react";
import AuthService from "../../utils/auth";

const userData = AuthService.getUser().data;
const username = userData.username;

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>User: {username}</p>
      <button onClick={AuthService.logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
