import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../context/ContextProvider";
import {
  Cart,
  Chat,
  Notification,
  UserProfile,
} from ".";

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}) => (
  <TooltipComponent
    position="BottomCenter"
    content={title}>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setscreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () =>
      setscreenSize(window.innerWidth);
    window.addEventListener(
      "resize",
      handleResize
    );
    handleResize();
    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () =>
    setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        color={currentColor}
        icon={<AiOutlineMenu />}
        customFunc={handleActiveMenu}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          color={currentColor}
          icon={<FiShoppingCart />}
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title="Chat"
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
          customFunc={() => handleClick("chat")}
        />
        <NavButton
          title="Notification"
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
          customFunc={() =>
            handleClick("notification")
          }
        />
        <TooltipComponent
          content="Profile"
          position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() =>
              handleClick("userProfile")
            }>
            <img
              alt="profile"
              src={avatar}
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">
                Hi,{" "}
              </span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Abdo
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && (
          <Notification />
        )}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
