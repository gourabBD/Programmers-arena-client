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
        <h5>We are trying our best to bring more courses day by day. So that people can learn easily and much efficiently.</h5>
        <p>Our target is to spread knowledge of computer languages.</p>
        <p>So that people can have the joy of a programmer or a computer expert.</p>
        <p>We hope the best and try to bring the best from you.</p>
      </div>
    </div>
  );
};

export default Home;
