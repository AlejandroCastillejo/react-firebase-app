import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import paths from "../../constants/paths";

import "./LoginSignupForm.scss";

const LoginSignupForm = ({ registered, title, onSubmit, error, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  // ToDo: parse error
  // ToDo: add repeat password input and verification for signup
  // ToDo: add show/hidde password
  return (
    <form className="login-signup-form">
      <div className="title-container">
        <h2>{title}</h2>
      </div>
      <div className="input-container">
        <p className="label">email</p>
        <input
          className="input"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            error && setError(null);
          }}
        />
      </div>

      <div className="input-container">
        <p className="label">password</p>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="on"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            error && setError(null);
          }}
        />
      </div>
      <label className="error">{error && `Error: ${error}`}</label>

      <div className="button-container">
        <button className="button" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="footer">
        {registered ? (
          <>
            <p>don't have an account? </p>{" "}
            <Link to={paths.SIGNUP}>register</Link>
          </>
        ) : (
          <>
            <p>alredy have an account? </p> <Link to={paths.LOGIN}>login</Link>
          </>
        )}
      </div>
    </form>
  );
};

LoginSignupForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func,
};

export default LoginSignupForm;
