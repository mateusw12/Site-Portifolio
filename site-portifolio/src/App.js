import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Layout, Skills } from './components';

import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("/");

  return (
    <BrowserRouter>
      <Layout isSidebarCollapsed={isSidebarCollapsed} selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
