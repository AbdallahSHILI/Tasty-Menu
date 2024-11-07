import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/index";
import { Home } from "./Pages/index";
import { MenuProvider } from "./context/MenuContext";
import React, { useState } from "react";
import SideBar from "./Components/SideBar/sideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MenuProvider>
      <Router>
        <Navbar toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isSidebarOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
