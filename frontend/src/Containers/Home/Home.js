import React from "react";

import classes from "./Home.module.css";

import SideSection from "./SideSection/SideSection";
import Content from "./Content/Content";

const Home = () => {
  return (
    <div className={classes.Home}>
      <SideSection />
      <Content />
    </div>
  );
};

export default Home;
