import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as productsReducer } from "./modules/products";
import { reducer as cartReducer } from "./modules/cart";

const cartPersistConfig = {
  key: "cart",
  storage,
  blacklist: ["isOpen"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

function configureStore(initialState?: any) {
  const middlewares = applyMiddleware(...[thunkMiddleware]);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middlewares)
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
