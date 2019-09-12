import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  console.log(title, items);
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
