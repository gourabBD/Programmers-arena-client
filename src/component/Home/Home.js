import React from "react";
import Courses from "../Courses/Courses";
import HomeCarrousel from "../HomeCarrousel/HomeCarrousel";

const Home = () => {
  return (
    <div className="d-block">
      <div>
        <h1>Complete web development course on going. </h1>
      </div>
      <div className="d-flex justify-content-center">
        <HomeCarrousel></HomeCarrousel>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
