import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutUsPage from "./pages/AboutUsPage";
import Complexes from "./pages/Complexes";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import SelectionOfApartment from "./pages/SelectionOfApartment";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsRu from "./locales/Ru";
import translationsUz from "./locales/Uz";
import Phone from "./components/Phone";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
  },
  lng: "ru",
  fallbackLng: "ru",
  // interpolation: { escapeValue: false },
});

const App = () => {
  const [modal, setModal] = useState(false);
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <Navbar changeLang={changeLang} />
        <Routes>
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contacts" element={<Contact setModal={setModal} />} />
          <Route path="/complexes" element={<Complexes />} />

          <Route
            path="/selection-of-apartment"
            element={<SelectionOfApartment setModal={setModal} />}
          />

          <Route
            path="/"
            element={<Main modal={modal} setModal={setModal} />}
          />

          <Route
            path="/*"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center py-5">
                      <Link to="/">
                        <h1>Page Not Found</h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
        <Footer modal={modal} setModal={setModal} />
        <FeedBack modal={modal} setModal={setModal} />
        <ScrollToTop />
        <Phone />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
