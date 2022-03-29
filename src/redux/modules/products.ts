import type { Action, Dispatch } from "redux";
import produce from "immer";
import { Products } from "@/types/products";
import { getAllProducts } from "@/services/requests/products";

// state
interface IState {
  items: Products;
  error: Error | null;
  loading: boolean;
}

interface IProductsState {
  products: IState;
}

const initialState: IState = {
  items: [
    {
      id: 1,
      title: "Product 1",
      price: "100",
      description: "Product 1 description",
      image: "https://via.placeholder.com/150",
      category: "Category 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: "200",
      description: "Product 2 description",
      image: "https://via.placeholder.com/150",
      category: "Category 2",
    },
  ],
  error: null,
  loading: false,
};

// action types
export enum ProductsActionTypes {
  ACTION_PRODUCTS_FETCH = "PRODUCTS_FETCH",
  ACTION_PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS",
  ACTION_PRODUCTS_FETCH_ERROR = "PRODUCTS_FETCH_ERROR",
}

export interface IActionProductsFetch extends Action {
  type: ProductsActionTypes.ACTION_PRODUCTS_FETCH;
}
export interface IActionProductsFetchSuccess extends Action {
  type: ProductsActionTypes.ACTION_PRODUCTS_FETCH_SUCCESS;
  payload: Products;
}
export interface IActionProductsFetchError extends Action {
  type: ProductsActionTypes.ACTION_PRODUCTS_FETCH_ERROR;
  payload: Error;
}

export type AppActions =
  | IActionProductsFetch
  | IActionProductsFetchSuccess
  | IActionProductsFetchError;

// actions
function actionProductsFetch(): IActionProductsFetch {
  return {
    type: ProductsActionTypes.ACTION_PRODUCTS_FETCH,
  };
}
function actionProductsFetchSuccess(
  payload: Products
): IActionProductsFetchSuccess {
  return {
    type: ProductsActionTypes.ACTION_PRODUCTS_FETCH_SUCCESS,
    payload,
  };
}
function actionProductsFetchError(payload: Error): IActionProductsFetchError {
  return {
    type: ProductsActionTypes.ACTION_PRODUCTS_FETCH_ERROR,
    payload,
  };
}

export function fetchProducts() {
  return (dispatch: Dispatch) => {
    dispatch(actionProductsFetch());
    getAllProducts()
      .then((products: Products) => {
        dispatch(actionProductsFetchSuccess(products));
      })
      .catch((error: Error) => {
        dispatch(actionProductsFetchError(error));
      });
  };
}

// reducer (using immer)
export function reducer(
  state: IState = initialState,
  action: AppActions
): IState {
  return produce(state, (draft) => {
    switch (action.type) {
      case ProductsActionTypes.ACTION_PRODUCTS_FETCH:
        draft.loading = true;
        break;
      case ProductsActionTypes.ACTION_PRODUCTS_FETCH_SUCCESS:
        draft.items = action.payload;
        draft.loading = false;
        break;
      case ProductsActionTypes.ACTION_PRODUCTS_FETCH_ERROR:
        draft.error = action.payload;
        draft.loading = false;
        break;
      default:
        break;
    }
  });
}

// selector
export const getItems = (state: IProductsState) => state.products.items;
export const getLoading = (state: IProductsState) => state.products.loading;
