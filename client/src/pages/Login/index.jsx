import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const Login = () => {
  // set initial form state
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  /// HANDLE CHANGE ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// FORM SUBMISSION ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.log(error);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      {data ? (
        <p>
          Successfully logged in! You may now head{" "}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Your email"
              name="email"
              type="text"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Your password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
      {error && <div>{error.message}</div>}
    </main>
  );
};

export default Login;
