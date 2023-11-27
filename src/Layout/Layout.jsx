import React from "react";
import Header from "./Header";
import Body from "./Body";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
