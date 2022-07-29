import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import SelectionOfApartment from "./pages/SelectionOfApartment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/selection-of-apartment"
            element={<SelectionOfApartment />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
