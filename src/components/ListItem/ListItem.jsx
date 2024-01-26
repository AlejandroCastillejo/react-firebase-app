import React from "react";

import "./ListItem.scss";

const ListItem = ({ itemData }) => {
  const { name, tagline, image_url } = itemData;

  return (
    <div className="list-item">
      <div className="image-container">
        <img src={image_url} height={60} />
      </div>
      <div className="text-container">
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default ListItem;
