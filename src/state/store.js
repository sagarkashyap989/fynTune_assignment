import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducer/index"

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {},composeEnhancers(
    applyMiddleware(...middleware)
  ));

  export default store;
