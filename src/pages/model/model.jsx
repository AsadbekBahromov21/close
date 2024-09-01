import { Button, Input } from "antd";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Model = ({ close, children }) => {
  return (
    <>
      <div
        onClick={close}
        className="fixed top-0 left-0 w-full h-screen bg-[#0005]"
      ></div>
      <div className="w-80  bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[16px] animate-top">
        {children}
      </div>
    </>
  );
};

export default Model;
