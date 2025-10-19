import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { cartData } from "../data/dummy";
import { Button } from "./index";

const Cart = () => {
  const { isClicked, setIsClicked, currentColor } = useStateContext();
  
  return (
    <>
      {/* Backdrop overlay */}
      {isClicked.cart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsClicked((prev) => ({ ...prev, cart: false }))}
        />
      )}
      
      {/* main cart */}
      <div
        className={`fixed right-0 top-0 h-screen w-full md:w-96 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isClicked.cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* title and close btn */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Shopping Cart
          </h2>
          <button
            onClick={() => setIsClicked((prev) => ({ ...prev, cart: false }))}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartData.map((item, index) => (
            <div className="flex mb-4 pb-4 border-b border-gray-100 dark:border-gray-700" key={index}>
              <img
                src={item.image}
                alt="cart item"
                className="rounded-lg mr-4 object-cover"
                style={{ width: "80px", height: "80px" }}
              />
              <div className="flex-1">
                <p className="text-md font-semibold text-gray-800 dark:text-gray-200">
                  {item.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {item.category}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-800 dark:text-gray-200 text-md font-semibold">
                    {item.price}
                  </p>
                  {/* quantity selection */}
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                    <button className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                      −
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
                      0
                    </span>
                    <button className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* total price and checkout button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <p>Subtotal</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                $
                {cartData.reduce(
                  (total, item) => total + Number(item.price.replace("$", "")),
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-gray-200">
              <p>Total</p>
              <p>
                $
                {cartData.reduce(
                  (total, item) => total + Number(item.price.replace("$", "")),
                  0
                )}
              </p>
            </div>
          </div>
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;