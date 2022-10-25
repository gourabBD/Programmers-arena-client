import React from "react";
import { useLoaderData } from "react-router-dom";

const IndividualCourse = () => {
  const course = useLoaderData();
  return (
    <div>
      <div>
        <h1>{course?.course_name}</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default IndividualCourse;
