import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our PROGRAM" title="What We Offer" />
      <Programs />
      <About />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
    </div>
  );
};

export default App;
