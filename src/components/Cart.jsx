import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "./Button";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
const Cart = () => {
  const { currentColor } = useStateContext();
  return (
    <div
      className="bg-half-transparent
    w-full fixed nav-item
    top-0 right-0">
      <div
        className="float-right h-screen duration-1000 ease-in-out  dark:text-gray-200 transition-all  bg-white
      dark:[#484B52]  md:w-400 p-8">
        <div className="flex justify-between items-center ">
          <p className="font-semibold text-lg">
            Shopping Cart
          </p>
          <Button
            color="rgb(153,171,180)"
            borderRadius="50%"
            bgHoverColor="light-gray"
            icon={<MdOutlineCancel />}
            size="2xl"
          />
        </div>
        {cartData.map((item, i) => (
          <div key={i}>
            <div className="flex items-center leading-8 gap-5 border-b-1 border-color p-4">
              <img
                alt={item.name}
                src={item.image}
                className="rounded-lg w-24 h-80"
              />
              <div>
                <p className=" font-semibold ">
                  {item.name}
                </p>
                <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                  {item.category}
                </p>
                <div className="gap-4 mt-2 items-center flex">
                  <p className="font-semibold text-lg">
                    {item.price}
                  </p>
                  <div className="flex items-center border-1 border-r-0 border-color rounded">
                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      0
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">
              Sub Total
            </p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">
              Discount
            </p>
            <p className="font-semibold">$0</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">
              Total
            </p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            width="full"
            borderRadius="10px"
            text="Place Order"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
