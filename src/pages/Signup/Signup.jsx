import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUserCredentials } from "../../helpers/auth";
import paths from "../../constants/paths";

import LoginSignupForm from "../../components/LoginSignupForm/LoginSignupForm";

import "./Signup.scss";

const Signup = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const auth = getAuth();

  const onSubmit = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserCredentials(user);
        navigate(paths.HOME);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="signup-page">
      <LoginSignupForm
        registered={false}
        title={"Sign up"}
        onSubmit={onSubmit}
        error={error}
        setError={setError}
      />
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
