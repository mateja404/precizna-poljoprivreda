import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {children}
    </>
  );
};

export default Layout;
