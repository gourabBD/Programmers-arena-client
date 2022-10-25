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
              <Link >
                <h4></h4>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Courses;