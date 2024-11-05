import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/index";
import { Home } from "./Pages/index";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
