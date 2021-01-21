import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CategoryPage from '../category/collection.component';

// import SHOP_DATA from '../../redux/shop/shop.data.js';

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }

//   render() {
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
  </div>
);

export default ShopPage;
