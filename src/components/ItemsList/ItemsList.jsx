import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem/ListItem";

import "./ItemsList.scss";

const ItemsList = ({ data }) => {
  return (
    <div className="items-list">
      <div className="list-container">
        {data.map((item) => (
          <ListItem key={item?.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

ItemsList.propTypes = { data: PropTypes.array };

export default ItemsList;
