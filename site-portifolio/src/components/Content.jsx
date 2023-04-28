import React, { useState } from "react";
import Header from "./Header";

import "../styles/Content.css";

const Content = ({ children }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleNavbarCollapse = (collapsed) => {
    setIsNavbarCollapsed(collapsed);
  };

  return (
    <div>
      <div className="fixed-top">
        <Header
          isNavbarCollapsed={isNavbarCollapsed}
          handleNavbarCollapse={handleNavbarCollapse}
        />
      </div>
      <div
        className={`container container-margin ${
          isNavbarCollapsed ? "pushed-down" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Content;
