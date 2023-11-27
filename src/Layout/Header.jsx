import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div class="center-content">
        <h1>Welcome to the Cat's gallery</h1>
      </div>
      <div className="menu-item">
        <a
          href="./"
          className={`menu-link ${currentPath === "/" ? "active" : ""}`}
        >
          Cat Gallery
        </a>
        <a
          href="./upload"
          className={`menu-link ${currentPath === "/upload" ? "active" : ""}`}
        >
          Upload a new cat
        </a>
      </div>
    </>
  );
};

export default Header;
