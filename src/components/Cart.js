import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-10 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-2">Cart items</h1>

      <div className="w-6/12 bg-gray-100 border border-gray-500 p-4">
        <button
          className="py-2 px-6 border border-gray-400 m-4"
          onClick={handleClear}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h1>Your cart is empty! Add some items to the cart!</h1>
        )}

        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
