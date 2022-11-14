import { useState } from "react";
import { Product } from "./useGetProducts";

export interface IInitialState {
  cart: Product[];
}
export interface IUseInitialState {
  state: IInitialState;
/*   addToCart: (payload: Product) => void;
  removeFromCart: (payload: any) => void; */
  addToCart: any;
  removeFromCart: any;
}

const initialState: IInitialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: any) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  } as IUseInitialState;
};

export default useInitialState;
