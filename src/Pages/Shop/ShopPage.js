import React, { Component } from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import SHOP_DATA from "./shop.data.js";

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, title, items}) => (
          <CollectionPreview key={id} title={title} items={items} />
          
        ))}
      </div>
    );
    
  }
}
