import {combineReducers} from "redux";

function products(state = [], action) {
  if (action.type === "PRODUCTS_LOADED") {
    return action.value;
  }
  return state;
}

function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

function contacts(state = [], action) {
  if (action.type === "CONTACTS_FETCHED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,
  products,
  vehicles,
  contacts
});
export default rootReducer;
