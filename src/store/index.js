import { applyMiddleware, createStore, compose } from "redux";
import { createAsyncMiddleware } from "redux-arc";

import reducers from "./reducers";
import { asyncTask } from "./middlewares";

let composeEnhancers = compose;

// eslint-disable-next-line no-underscore-dangle
if (window.__DEV__ || process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// create the async middleware
const asyncMiddleware = createAsyncMiddleware(asyncTask);

const store = createStore(reducers, composeEnhancers(applyMiddleware(asyncMiddleware)));

export default store;
