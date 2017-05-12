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
        <ContactsContainer />
        <ProductsContainer />
        <VehiclesContainer />
        <CommentsContainer />
      </div>
    );
  }
}
export default (App);


