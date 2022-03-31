import type { Action } from "redux";
import produce from "immer";
import { CartItems } from "@/types/cart";
import { Product } from "@/types/products";

// state
interface IState {
  items: CartItems;
  isOpen: boolean;
}
interface ICartState {
  cart: IState;
}

const initialState: IState = {
  items: [],
  isOpen: false,
};

// action types
export enum CartActionTypes {
  ACTION_CART_ADD_ITEM = "ACTION_CART_ADD_ITEM",
  ACTION_CART_REMOVE_ITEM = "ACTION_CART_REMOVE_ITEM",
  ACTION_CART_CLEAR_ITEMS = "ACTION_CART_CLEAR_ITEMS",
  ACTION_CART_INCREASE_ITEM_QUANTITY = "ACTION_CART_INCREASE_ITEM_QUANTITY",
  ACTION_CART_DECREASE_ITEM_QUANTITY = "ACTION_CART_DECREASE_ITEM_QUANTITY",
  ACTION_CART_TOGGLE_IS_OPEN = "ACTION_CART_TOGGLE_IS_OPEN",
}

export interface IActionCartAddItem extends Action {
  type: CartActionTypes.ACTION_CART_ADD_ITEM;
  payload: {
    product: Product;
  };
}
export interface IActionCartRemoveItem extends Action {
  type: CartActionTypes.ACTION_CART_REMOVE_ITEM;
  payload: {
    id: number;
  };
}
export interface IActionCartClearItems extends Action {
  type: CartActionTypes.ACTION_CART_CLEAR_ITEMS;
}
export interface IActionCartIncreaseItemQuantity extends Action {
  type: CartActionTypes.ACTION_CART_INCREASE_ITEM_QUANTITY;
  payload: {
    id: number;
  };
}
export interface IActionCartDecreaseItemQuantity extends Action {
  type: CartActionTypes.ACTION_CART_DECREASE_ITEM_QUANTITY;
  payload: {
    id: number;
  };
}
export interface IActionCartToggleIsOpen extends Action {
  type: CartActionTypes.ACTION_CART_TOGGLE_IS_OPEN;
}

export type AppActions =
  | IActionCartAddItem
  | IActionCartRemoveItem
  | IActionCartClearItems
  | IActionCartIncreaseItemQuantity
  | IActionCartDecreaseItemQuantity
  | IActionCartToggleIsOpen;

// actions
export function actionCartAddItem(product: Product): IActionCartAddItem {
  return {
    type: CartActionTypes.ACTION_CART_ADD_ITEM,
    payload: {
      product,
    },
  };
}
export function actionCartRemoveItem(id: number): IActionCartRemoveItem {
  return {
    type: CartActionTypes.ACTION_CART_REMOVE_ITEM,
    payload: {
      id,
    },
  };
}
export function actionCartClearItems(): IActionCartClearItems {
  return {
    type: CartActionTypes.ACTION_CART_CLEAR_ITEMS,
  };
}
export function actionCartIncreaseItemQuantity(
  id: number
): IActionCartIncreaseItemQuantity {
  return {
    type: CartActionTypes.ACTION_CART_INCREASE_ITEM_QUANTITY,
    payload: {
      id,
    },
  };
}
export function actionCartDecreaseItemQuantity(
  id: number
): IActionCartDecreaseItemQuantity {
  return {
    type: CartActionTypes.ACTION_CART_DECREASE_ITEM_QUANTITY,
    payload: {
      id,
    },
  };
}
export function actionCartToggleIsOpen(): IActionCartToggleIsOpen {
  return {
    type: CartActionTypes.ACTION_CART_TOGGLE_IS_OPEN,
  };
}

// reducer
export function reducer(
  state: IState = initialState,
  action: AppActions
): IState {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartActionTypes.ACTION_CART_ADD_ITEM: {
        const { product } = action.payload;
        const item = draft.items.find((item) => item.product.id === product.id);
        if (item) {
          item.quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }

      case CartActionTypes.ACTION_CART_REMOVE_ITEM: {
        const { id } = action.payload;
        const itemIndex = draft.items.findIndex(
          (item) => item.product.id === id
        );
        if (itemIndex !== -1) {
          draft.items.splice(itemIndex, 1);
        }
        break;
      }

      case CartActionTypes.ACTION_CART_CLEAR_ITEMS:
        draft.items = [];
        break;

      case CartActionTypes.ACTION_CART_INCREASE_ITEM_QUANTITY: {
        const { id } = action.payload;
        const item = draft.items.find((item) => item.product.id === id);
        if (item) {
          item.quantity += 1;
        }
        break;
      }

      case CartActionTypes.ACTION_CART_DECREASE_ITEM_QUANTITY: {
        const { id } = action.payload;
        const item = draft.items.find((item) => item.product.id === id);
        if (item) {
          item.quantity -= 1;
          if (item.quantity === 0) {
            const itemIndex = draft.items.findIndex(
              (item) => item.product.id === id
            );
            if (itemIndex !== -1) {
              draft.items.splice(itemIndex, 1);
            }
          }
        }
        break;
      }

      case CartActionTypes.ACTION_CART_TOGGLE_IS_OPEN:
        draft.isOpen = !draft.isOpen;
        break;
    }
  });
}

// selectors
export const getCartItems = (state: ICartState) => state.cart.items;
export const getCartItemsCount = (state: ICartState) => state.cart.items.length;
export const getCartItemsTotalPrice = (state: ICartState) =>
  state.cart.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
export const getCartItemsTotalQuantity = (state: ICartState) =>
  state.cart.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
export const getCartIsOpen = (state: ICartState) => state.cart.isOpen;
