import first from './images/edgar-Ky9JHrdvb1o-unsplash (1).jpg';
import second from './images/jan-kopriva-b6fns2kOFsk-unsplash.jpg';
import third from './images/jairph-P-w61wkh-PQ-unsplash.jpg';

import { useEffect, useRef } from 'react';

const ServicesCarousel = () => {
  // const carouselRef = useRef(null);
  useEffect(() => {
    const startCarousel = () => {
      const carouselElement = document.getElementById('servicesCarousel');
      if (carouselElement) {
        // eslint-disable-next-line no-undef
        const carousel = new bootstrap.Carousel(carouselElement, {
          interval: 4000, // Set your desired interval
        });
      }
    };

    startCarousel(); // Call the function when the component mounts

    // Optionally, you can specify an empty dependency array to ensure it runs only once when the component mounts:
    // useEffect(startCarousel, []);

    // Or you can use another condition to trigger it, such as a button click or any user interaction event.
  }, []);

  return (
    <div
      // ref={carouselRef}
      id='servicesCarousel'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#servicesCarousel'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#servicesCarousel'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#servicesCarousel'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='carousel-img-container'>
            <img src={first} className='img-fluid d-block' alt='...' />
          </div>
          <div
            className='carousel-caption '
            style={{
              backdropFilter: 'blur(2px)',
              background: '#d3d3d300',
              width: '100%',
              height: '100%',
              left: '0',
              right: '1%',
              bottom: 0,
              textShadow: '1px 1px black',
              fontSize: '1.3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h5>Logistics</h5>
            <p> Best logistics solutions </p>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-img-container'>
            <img src={second} className='img-fluid d-block' alt='...' />
          </div>
          <div className='carousel-caption '>
            <h5>Internal transport</h5>
            <p> Countless successful internal transports </p>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-img-container'>
            <img src={third} className='img-fluid d-block' alt='...' />
          </div>
          <div className='carousel-caption d-block d-md-block'>
            <h5> International </h5>
            <p> And as many pleased partners around the world </p>
          </div>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#servicesCarousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#servicesCarousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default ServicesCarousel;
