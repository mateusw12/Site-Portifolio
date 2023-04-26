import React, { useEffect, useState } from "react";
import { Sidebar } from "./index";

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    setIsMobileView(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const divElement = document.getElementById("children");
    if (divElement) {
      divElement.style.marginLeft = isSidebarCollapsed
        ? isMobileView
          ? "50px"
          : "250px"
        : isMobileView
        ? "150px"
        : "250px";
    }
  }, [isSidebarCollapsed, isMobileView]);

  const handleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="image">
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          handleSidebarCollapse={handleSidebarCollapse}
        />
        <div
          id="children"
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
