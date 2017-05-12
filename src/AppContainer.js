import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function (user) {
      dispatch(loadContacts(user));
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
