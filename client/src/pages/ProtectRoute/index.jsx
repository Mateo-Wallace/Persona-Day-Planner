import React from "react";
import { Link } from "react-router-dom";

import padlock from "../../images/padlock.png";

const ProtectRoute = () => {
  return (
    <main>
      <img
        src={padlock}
        alt="padlock"
        style={{ height: "250px", width: "250px", margin: 3 }}
      />

      <p>
        Sorry, but you must be logged in to your account to view this
        information.
      </p>

      <Link to="/signup" style={{ textDecoration: "none" }}>
        <h1>Sign Up now</h1>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <h1>Login now</h1>
      </Link>
    </main>
  );
};

export default ProtectRoute;
