import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUserCredentials } from "../../helpers/auth";
import paths from "../../constants/paths";

import Header from "../../components/Header/Header";

import "./HomePage.scss";

const HomePage = (props) => {
  const navigate = useNavigate();

  const userCredentials = getUserCredentials();

  useEffect(() => {
    !userCredentials && navigate(paths.LOGIN);
  }, [userCredentials]);

  return (
    <div className="home-page">
      <Header userName={userCredentials?.email} />

      <div className="body">
        <button onClick={() => navigate(`${paths.RESULTS}/1`)}>
          Show results
        </button>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
