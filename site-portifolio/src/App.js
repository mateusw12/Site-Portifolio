import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Content, Home, NotFound, Project, Skills } from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
