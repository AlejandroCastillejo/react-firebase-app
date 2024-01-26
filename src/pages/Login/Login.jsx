import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUserCredentials } from "../../helpers/auth";
import paths from "../../constants/paths";

import LoginSignupForm from "../../components/LoginSignupForm/LoginSignupForm";

import "./Login.scss";

const Login = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const auth = getAuth();

  const onSubmit = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
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
    <div className="login-page">
      <LoginSignupForm
        registered={true}
        title={"Log in"}
        onSubmit={onSubmit}
        error={error}
        setError={setError}
      />
    </div>
  );
};

Login.propTypes = {};

export default Login;
