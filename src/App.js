import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import Main from "./pages/Main";
import SelectionOfApartment from "./pages/SelectionOfApartment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<AboutUsPage />} />

          <Route
            path="/selection-of-apartment"
            element={<SelectionOfApartment />}
          />

          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
