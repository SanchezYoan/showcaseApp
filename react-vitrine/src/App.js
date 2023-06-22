import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projet-1" element={<Project1 />}></Route>
          <Route path="/projet-2" element={<Project2 />}></Route>
          <Route path="/projet-3" element={<Project3 />}></Route>
          <Route path="/projet-4" element={<Project4 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
