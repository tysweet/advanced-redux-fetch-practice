import React, { Component } from "react";
import "./App.css";
import ContactsContainer from "./containers/ContactsContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CommentsContainer from "./containers/CommentsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactsContainer />
        <h1>Products</h1>
        <ProductsContainer />
        <h1>Vehicles</h1>
        <VehiclesContainer />
        <h1>Comments </h1>
        <CommentsContainer />
      </div>
    );
  }
}
export default (App);


