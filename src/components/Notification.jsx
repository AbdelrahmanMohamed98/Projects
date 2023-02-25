import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from ".";
const Notification = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-xs rounded p-1 px-2 bg-orange-theme "
            style={{ color: currentColor }}>
            {" "}
            4 New
          </button>
        </div>
        <Button
          color="rgb(153,171,180)"
          borderRadius="50%"
          bgHoverColor="light-gray"
          icon={<MdOutlineCancel />}
          size="2xl"
        />
      </div>
      <div className="mt-5">
        {chatData.map((item, i) => (
          <div
            key={i}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img
              alt={item.message}
              src={item.image}
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className=" font-semibold dark:text-gray-200">
                {item.message}
              </p>
              <p className="text-gray-500 text-sm  dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          width="full"
          borderRadius="10px"
          text="See All Notifications"
        />
      </div>
    </div>
  );
};

export default Notification;
