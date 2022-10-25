import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Image style={{height:'50px'}} className="me-2 mb-2" src='https://cdn.dribbble.com/userupload/2448240/file/original-9d958c1a2500b83f7b3f623bb14dfa0f.png?resize=400x0'></Image>
        <Navbar.Brand ><Link className='fw-bold text-decoration-none text-info' to={'/'}>Programmers Arena</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='me-3 text-decoration-none' to={'/courses'}>Courses</Link>
            <Link className='me-3 text-decoration-none' to={'/Blogs'}>Blogs</Link>
           
          </Nav>
          <Nav>
            <Link className='me-3 text-decoration-none' to={'/login'}>Login</Link>
            <Link className='me-3 text-decoration-none' to={'/register'} >
             Register
            </Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;