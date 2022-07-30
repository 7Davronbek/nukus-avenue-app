import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import Complexes from "./pages/Complexes";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import SelectionOfApartment from "./pages/SelectionOfApartment";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/complexes" element={<Complexes />} />

                <Route
                    path="/selection-of-apartment"
                    element={<SelectionOfApartment />}
                />

                <Route path="/" element={<Main />} />
                <Route path="/*" element={<>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-center vh-100">

                                <h1>Page Not Found</h1>

                            </div>
                        </div>
                    </div>
                </>} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
};

export default App;
