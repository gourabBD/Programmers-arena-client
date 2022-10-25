import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import { Container, Row, Col } from "react-bootstrap";

const Courses = () => {
    const courses= useLoaderData()
    return (
        <Container>
        <Row>
          <Col lg={9} className="d-grid d-lg-grid">
            <div className='row row-cols-lg-3  m-2'>
             {
                courses?.map(course=><Course key={course?.id} course={course}></Course>)
             }
            </div>
          </Col>
  
          <Col lg={3}>
            <div>
            <h3 className='m-3'>Ongoing courses:</h3>
             {
                courses?.map(course=><Link className='text-decoration-none' key={course.id} to={`/courses/${course?.id}`}><h4>{course.course_name}</h4></Link>)
             }
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Courses;