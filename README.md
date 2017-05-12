### Setup
* Fork, Clone, yarn install, yarn start

### Use local api
* http://localhost:4000/products
* http://localhost:4000/contacts
* http://localhost:4000/vehicles
* http://localhost:4000/comments


### Create actions in actions/index.js
* loadContacts
    * return a thunk function
    * make a fetch call to /contacts
    * in the second then, dispatch to contactsLoaded
* contactsLoaded(contacts)
    * return an action
    * type is “CONTACTS_LOADED”
    * value is contacts
* loadVehicle
    * return a thunk function
    * make a fetch call to /vehicles
    * in the second then, dispatch to vehiclesLoaded
* vehiclesLoaded(vehicles)
    * return an action
    * type is “VEHICLES_LOADED”
    * value is vehicles
* loadComments
    * return a thunk function
    * make a fetch call to /comments
    * in the second then, dispatch to commentsLoaded
* commentsLoaded(comments)
    * return an action
    * type is “COMMENTS_LOADED”
    * value is comments
* loadProducts
    * return a thunk function
    * make a fetch call to /products
    * in the second then, dispatch to productsLoaded
* productsLoaded(products)
    * return an action
    * type is “PRODUCTS_LOADED”
    * value is products

### Create reducers in reducers/index.js
* Create reducers based on the state in state.js
* Determine which action the reducers should care about 
* return the appropriate value

### AppContainer
* in AppContainer.js
* import actions loadContacts, loadVehicles, loadComments, loadProducts
* mayDispatchToProps for these actions to props of the same name

### App
* In App.js
* call loadContacts, loadVehicles,loadComments,loadProducts in componentDidMount



