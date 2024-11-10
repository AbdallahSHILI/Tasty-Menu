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
          <Route path="/crepe" element={<CategoryPage category={1} />} />
          <Route path="/gaufre" element={<CategoryPage category={2} />} />
          <Route path="/bubble" element={<CategoryPage category={3} />} />
          <Route path="/waffle" element={<CategoryPage category={4} />} />
          <Route path="/boissons" element={<CategoryPage category={5} />} />
          <Route path="/ice-cream" element={<CategoryPage category={6} />} />
          <Route path="/malfouf" element={<CategoryPage category={7} />} />
          <Route path="/cafe" element={<CategoryPage category={8} />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
