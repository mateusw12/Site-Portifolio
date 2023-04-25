import React from "react";
import { Sidebar } from "./index";

const Layout = ({
  children,
  isSidebarCollapsed,
  selectedMenuItem,
  setSelectedMenuItem,
}) => {
  return (
    <div className="image">
      <div style={{ display: "flex", height: "100vh" }}>
        {!isSidebarCollapsed && <Sidebar />}
        <div
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: isSidebarCollapsed ? "80px" : "250px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
