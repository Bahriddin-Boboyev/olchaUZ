import React from "react";
import Header_bottom from "./components/header-bottom/header_bottom";
import Header_top from "./components/header-top/header_top";
import Hero from "./components/hero/hero";
import HeroCards from "./components/cards/hero-cards";
import Footer from "./components/footer/footer";
const Home = () => {
  return (
    <>
      <header>
        <Header_top />
        <Header_bottom />
      </header>
      <main>
        <Hero />
        <HeroCards />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
