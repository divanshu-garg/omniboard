import React from "react";
import { chatData } from "../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "./index";

const Chat = () => {
  const { currentColor, setIsClicked } = useStateContext();
  return (
    <div className="nav-item shadow-2xl absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="justify-between flex items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2">
            Messages
          </h2>
          <button
            onClick={() =>
              setIsClicked((prev) => ({ ...prev, chat: false }))
            }
          >
            <MdOutlineCancel />
          </button>
        </div>
        {/* loop chat data */}
        {chatData.map((item, index) => (
          <div className="flex m-3 border-b-2 pb-2" key={index}>
            <div className="items-center justify-center mr-4">
              <img
                src={item.image}
                className="rounded-full"
                style={{ width: "50px" }}
              />
            </div>
            <div className="items-center justify-center">
              <p className="text-2md font-semibold">{item.message}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <p className="text-gray-400 text-sm">{item.time}</p>
            </div>
          </div>
        ))}
        {/* see all notif button */}
        <div className="mt-5 block items-center">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
    </div>
  );
};

export default Chat;
