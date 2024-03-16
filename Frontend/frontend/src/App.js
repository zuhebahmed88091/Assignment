import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/home"
          element={<Home isAuthenticated={isAuthenticated} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
