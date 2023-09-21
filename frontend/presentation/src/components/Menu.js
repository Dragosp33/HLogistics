import React, { useEffect, useRef, useState } from 'react';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import logo from './logo.png';
import whitelogo from './logo_white_background.png';
import croppedlogo from './logo_white_background_cropped.png';

const Menu = ({ scrollspyref }) => {
  const defaultActiveKey = '#scrollspyfront'; // Set the default active key
  const activeLinkRef = useRef(defaultActiveKey);
  const [scrolling, setScrolling] = useState(false);
  /*
  useEffect(() => {
    // Adjust scroll offset for Navbar height
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    console.log(navbarHeight);
    const navLinks = document.querySelectorAll('a');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      navLinks.forEach((link) => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (
          targetSection &&
          scrollPosition >= targetSection.offsetTop - navbarHeight
        ) {
          activeLinkRef.current = targetId;
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
*/
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const currentActiveLink = document.querySelector(`.nav-link.active`);

    // Scroll to the target section
    const targetSection = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetSection.offsetTop - navbarHeight;

    setScrolling(true);

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    setTimeout(() => {
      if (
        currentActiveLink &&
        currentActiveLink.getAttribute('href') !== targetId
      ) {
        currentActiveLink.classList.remove('animate-underline');
      }
      // Remove the animation class for the previous active link

      // Set the active link to the new link
      activeLinkRef.current = targetId;

      // Reset the scrolling state
      setScrolling(false);
    }, 300); // Adjust the delay as needed for the scroll animation to complete

    // Add the animation class to the new active link
    if (
      currentActiveLink &&
      currentActiveLink.getAttribute('href') !== targetId
    ) {
      const newActiveLink = document.querySelector(`a[href="${targetId}"]`);
      newActiveLink.classList.add('animate-underline');
    }
  };

  return (
    <Navbar
      id='navbar-menu'
      collapseOnSelect
      expand='lg'
      className='bg-body-tertiary'
      fixed='top'
    >
      <Container fluid>
        <Navbar.Brand href='#scrollspyfront'>
          <img
            alt=''
            src={croppedlogo}
            width='120'
            height='40'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
        {/*} <Navbar.Collapse id='responsive-navbar-nav'> */}
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              H-Transportation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='justify-content-end'>
            <Nav defaultActiveKey={defaultActiveKey}>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspyfront'
                  href='#scrollspyfront'
                  active={
                    !scrolling && activeLinkRef.current === '#scrollspyfront'
                  }
                  onClick={(event) => handleLinkClick(event, '#scrollspyfront')}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspyabout'
                  href='#scrollspyabout'
                  active={
                    !scrolling && activeLinkRef.current === '#scrollspyabout'
                  }
                  onClick={(event) => handleLinkClick(event, '#scrollspyabout')}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspycontact'
                  href='#scrollspycontact'
                  active={
                    !scrolling && activeLinkRef.current === '#scrollspycontact'
                  }
                  onClick={(event) =>
                    handleLinkClick(event, '#scrollspycontact')
                  }
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menu;
