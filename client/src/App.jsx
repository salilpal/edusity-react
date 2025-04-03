import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle="Our PROGRAM" title="What We Offer" />
      <Programs />
    </div>
  );
};

export default App;
