import React from "react";
import PropTypes from "prop-types";

import { clearUserCredentials } from "../../helpers/auth";

import "./Header.scss";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";

const Header = ({ userName }) => {
  const navigate = useNavigate();

  const logOut = () => {
    clearUserCredentials();
    navigate(paths.HOME);
  };

  return (
    <div className="header">
      <h2>Hi {userName || "user"}!</h2>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

Header.propTypes = { userName: PropTypes.string };

export default Header;
