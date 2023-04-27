import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Layout, Project, Skills } from './components';
import { SidebarProvider } from './context/SidebarContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <SidebarProvider>
        <Layout >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Project />} />
          </Routes>
        </Layout>
      </SidebarProvider>

    </BrowserRouter>
  );
}

export default App;
