import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Landing = () => {
  return (
    <main>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <h1>Sign Up now</h1>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <h1>Login now</h1>
      </Link>
      {Auth.loggedIn() ? (
        <div>
          <p>You are logged in</p>
          <button onClick={Auth.logout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </main>
  );
};

export default Landing;
