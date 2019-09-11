import React from "react";



import NavBar from "./nav-bar/nav-bar-container";
import Hero from "./hero/hero-container";
import Footer from "./footer/footer-container"

const App = () => {
  return (
      <React.Fragment>
          {/*Placeholder for <Router>*/}
          <NavBar />
          <Hero />
          <Footer/>
      </React.Fragment>
  );
};

export default App;
