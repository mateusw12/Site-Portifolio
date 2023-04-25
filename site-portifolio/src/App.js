import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Layout, Project, Skills } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route exact path="/projects" element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
