import React from "react";
import About from "./components/About";
import Benefites from "./components/Benefites";
import Find from "./components/Find";
import Footer from "./components/Footer";
import Future from "./components/Future";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Find />
      <Benefites />
      <Future />
      <Footer />
    </>
  );
}

export default App;
