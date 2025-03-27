import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItem: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    // console.log(existingCartItemIndex);
    const existingCartItem = updatedItems[existingCartItemIndex];

    // always check if the existingCartItem is existing
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => {
        return product.id === action.payload;
      });
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return { ...state, items: updatedItems }; //Unnecessary to use spread operator here if the state is a simple object
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, dispatchShoppingCartAction] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );
  console.log("State", shoppingCartState);
  const cartCtx = {
    items: shoppingCartState.items,
    onAddItemToCart: handleAddItemToCart,
    onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
  }; // Names of these properties have to be similar to that of variables defined in useContext hook //
  console.log("Ctx: ", cartCtx);

  function handleAddItemToCart(id) {
    dispatchShoppingCartAction({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatchShoppingCartAction({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}
