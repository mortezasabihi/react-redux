import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as productsReducer } from "./modules/products";

const rootReducer = combineReducers({
  products: productsReducer,
});

function configureStore(initialState?: any): Store {
  const middlewares = applyMiddleware(...[thunkMiddleware]);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middlewares)
  );

  return store;
}

export default configureStore;
