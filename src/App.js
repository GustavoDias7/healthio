import React from "react";
import "assets/css/style.css";
import MainHeader from "components/common/MainHeader";
import Hero from "components/Hero";
import About from "components/About";
import Design from "components/Design";
import Download from "components/Download";
import Footer from "components/common/Footer";

function App() {
  return (
    <>
      <MainHeader />
      <Hero />
      <About />
      <Design />
      <Download />
      <Footer />
    </>
  );
}

export default App;
