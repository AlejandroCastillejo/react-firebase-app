import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPageData } from "../../services/punk-api";
import { getUserCredentials } from "../../helpers/auth";

import paths from "../../constants/paths";
import { itemsPerPage } from "../../constants/pages";

import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

import "./ListPage.scss";

const ListPage = (props) => {
  const navigate = useNavigate();
  const { page } = useParams();

  const [pageData, setPageData] = useState([]);

  const userCredentials = getUserCredentials();

  const navigateToNextPage = () =>
    navigate(`${paths.RESULTS}/${Number(page) + 1}`);

  const navigateToPrevPage = () =>
    navigate(`${paths.RESULTS}/${Number(page) - 1}`);

  useEffect(() => {
    !userCredentials && navigate(paths.LOGIN);
  }, [userCredentials]);

  useEffect(() => {
    getPageData(page).then((data) => setPageData(data));
  }, [page]);

  return (
    <div className="list-page">
      <Header userName={userCredentials?.email} />
      {pageData.length ? <ItemsList data={pageData} /> : <Loading />}
      <Pagination
        prevAvailable={page > 1}
        nextAvailable={pageData?.length && pageData.length === itemsPerPage}
        onClickPrev={navigateToPrevPage}
        onClickNext={navigateToNextPage}
      />
    </div>
  );
};

ListPage.propTypes = {};

export default ListPage;
