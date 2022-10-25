import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import CheckOut from './../CheckOutPage/CheckOut';

const IndividualCourse = () => {
  const course = useLoaderData();
  return (
    <div>
      <div>
        <h1>{course?.course_name}</h1>
      </div>
      <div>
        <Image style={{ height: "300px" }} src={course?.image}></Image>
        <p>{course?.details}</p>
        <p>Cost: $ {course?.cost}</p>
      </div>
      <Link to={`/checkout/${course?.id}`}>
        <Button>Get premium access</Button>
      </Link>
    </div>
  );
};

export default IndividualCourse;
