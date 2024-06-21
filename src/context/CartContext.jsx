import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const getLocalCartData = () => {
  const storedCartItems = localStorage.getItem("Cart-Items");
  if (storedCartItems) {
    try {
      return JSON.parse(storedCartItems);
    } catch (error) {
      console.error("Error parsing stored cart items:", error);
      return [];
    }
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, price, product } = action.payload;
      const cartProduct = {
        id: id,
        price: price,
        image: product.image[0],
        title: product.title,
        description: product.description,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_CART_ITEM":
      const updatedCart = state.cart.filter((currItem) => currItem.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cartProducts = ({ id, price, product }) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, price, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("Cart-Items", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, cartProducts, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
