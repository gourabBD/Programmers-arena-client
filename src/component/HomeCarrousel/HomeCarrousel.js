import React from 'react';
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeCarrousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='m-3 w-50'>
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--WGXoQbsM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAr8AAAAJGUxMTdlYzM4LWZmNmEtNGZiNi05Mjc0LTc1ODQ0MWZmYzU4Nw.png"
          alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
          <h3>Vanilla Java Script.</h3>
          <p>Basics of Java script</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
          alt="Second slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>CSS</h3>
          <p>Styling User interface to make it much more attractive.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>React JS</h3>
          <p>
            A Java Script liabrary and the most popular one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://blog.getbootstrap.com/assets/img/2020/06/v5-new-logo.png"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>Bootstrap</h3>
          <p>
            A CSS framework and the most popular one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://acquven.com/blog/02/images/angular.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>Angular JS</h3>
          <p>
            A JavaScript framework and the most popular one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>Vue JS</h3>
          <p>
            A JavaScript framework and one of the  popular one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default HomeCarrousel;