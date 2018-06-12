export function fetchContacts() {
  return function (dispatch) {
    dispatch({
      type: "ABOUT_TO_FETCH_CONTACTS"
    });
    fetch("http://localhost:4001/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsFetched(contacts));
    });
  };
}

export function contactsFetched(contacts) {
  return {
    type: "CONTACTS_FETCHED",
    value: contacts
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("http://localhost:4001/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => dispatch(fetchContacts()));
  };
}
 

export function loadProducts() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_PRODUCTS"
    });
    fetch("http://localhost:4001/products")
    .then( (response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products));
    });
  };
}

export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

export function createProduct(product) {
  return function (dispatch) {
    fetch("http://localhost:4001/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
 

export function loadVehicles() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_VEHICLES"
    });
    fetch("http://localhost:4001/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("http://localhost:4001/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
}
 

export function loadComments() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_COMMENTS"
    });
    fetch("http://localhost:4001/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
}

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

export function createComment(comment) {
  return function (dispatch) {
    fetch("http://localhost:4001/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
}
 
