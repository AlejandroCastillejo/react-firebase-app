import React from "react";
import PropTypes from "prop-types";

import "./Pagination.scss";

const Pagination = ({
  prevAvailable,
  nextAvailable,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className="pagination">
      <button
        className="button"
        disabled={!prevAvailable}
        onClick={onClickPrev}
      >
        {"<"}
      </button>
      <button
        className="button"
        disabled={!nextAvailable}
        onClick={onClickNext}
      >
        {">"}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
};

export default Pagination;
