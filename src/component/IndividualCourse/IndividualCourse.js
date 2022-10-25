import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

import  { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { BsDownload } from "react-icons/bs";




const IndividualCourse = () => {
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const course = useLoaderData();
  return (
    <div ref={componentRef}>
      <div className="d-flex justify-content-center m-3 ">
        <h1>{course?.course_name}</h1>
        <Button className="ms-5 w-2" onClick={handlePrint}><BsDownload></BsDownload></Button>
      </div>
      <div >
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
