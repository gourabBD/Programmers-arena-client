import React from "react";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";

const Course = ({ course }) => {
  return  <CardGroup>
  <Card className="p-2">
    <Card.Img style={{height:'250px'}} variant="top" src={course?.image} />
    <Card.Body>
      <Card.Title>{course?.course_name}</Card.Title>
      
    </Card.Body>
    <div>
    <Link to={`/courses/${course.id}`}>

        <Button>Show Details</Button>
    </Link>
    </div>
  </Card>
  
  
</CardGroup>
};

export default Course;
