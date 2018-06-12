import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {fetchContacts, loadProducts, loadVehicles, loadComments} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    getContacts: () => {
      const action = fetchContacts();
      dispatch(action);
    },
    getProducts: () => {
      const action = loadProducts();
      dispatch(action);
    },
    getVehicles: () => {
      const action = loadVehicles();
      dispatch(action);
    },
    getComments: () => {
      const action = loadComments();
      dispatch(action);
    },
  };
}

export default connect(null,mapDispatchToProps)(App);
