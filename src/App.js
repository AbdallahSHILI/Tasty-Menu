import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/index";
import { Home, CategoryPage } from "./Pages/index";
import { MenuProvider } from "./context/MenuContext";
import React, { useState } from "react";
import SideBar from "./Components/SideBar/sideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <MenuProvider>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Crepe" element={<CategoryPage category={1} />} />
          <Route path="/Gaufre" element={<CategoryPage category={2} />} />
          <Route path="/Bubbles" element={<CategoryPage category={3} />} />
          <Route path="/Waffle" element={<CategoryPage category={4} />} />
          <Route path="/Malfouf" element={<CategoryPage category={5} />} />
          <Route path="/Ice-Cream" element={<CategoryPage category={6} />} />
          <Route path="/Jus" element={<CategoryPage category={7} />} />
          <Route path="/Jwajem" element={<CategoryPage category={8} />} />
          <Route path="/Café" element={<CategoryPage category={9} />} />
          <Route path="/Pancake" element={<CategoryPage category={10} />} />
          <Route path="/Milkshake" element={<CategoryPage category={11} />} />
          <Route path="/Mojito" element={<CategoryPage category={12} />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
