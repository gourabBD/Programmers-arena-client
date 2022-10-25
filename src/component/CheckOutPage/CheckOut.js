import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-hot-toast';


const CheckOut = () => {
    const course=useLoaderData()
    return (
        <div className='d-flex justify-content-center'>

        <Card className='m-2 ' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={course?.image} />
        <Card.Body>
          <Card.Title>{course?.course_name}</Card.Title>
          <Card.Text>
            {course?.details}
          </Card.Text>
          <div className='d-grid'>

          <p>Cost: $ {course?.cost}</p>
          <Button onClick={()=>toast.success('Congratulations! You have Selected a course.')} variant="primary">Select</Button>
          <Link to={'/courses'}>Back to courses</Link>
          </div>
        </Card.Body>
      </Card>
        </div>
    );
};

export default CheckOut;