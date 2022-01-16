import React from "react";
import "assets/css/style.css";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import Design from "components/Design";
import Download from "components/Download";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Design />
      <Download />
      <Footer />
    </>
  );
}

export default App;
