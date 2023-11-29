import React, { useEffect, useRef, useState } from 'react';
import { Nav, Navbar, Container, Offcanvas, Dropdown } from 'react-bootstrap';
import logo from './logo.png';
import whitelogo from './logo_white_background.png';
import croppedlogo from './logo_white_background_cropped.png';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import cabteamlogo from './images/cabteam_logo.png';

const Menu = ({ scrollspyref }) => {
  const location = useLocation();
  const Navigate = useNavigate();
  const defaultActiveKey = '/services'; // Set the default active key
  const activeLinkRef = useRef(defaultActiveKey);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('#scrollspyfront');
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

  /*
  const handleLinkClick = (event, targetId) => {
    const currentActiveLink = document.querySelector(`.nav-link.active`);
    /*if (targetId === '/services') {
      Navigate('/services');
    } else*/ /*if (window.location.pathname === '/services') {
      console.log('///');
      /* Navigate(`/`); */
  /*setTimeout(() => {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
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

            // Set the active link to the new link
            activeLinkRef.current = targetId;

            // Reset the scrolling state
            setScrolling(false);
          }, 300); // Adjust the delay as needed for the scroll animation to complete

          // Add the animation className to the new active link
          if (
            currentActiveLink &&
            currentActiveLink.getAttribute('href') !== targetId
          ) {
            const newActiveLink = document.querySelector(
              `a[href="${targetId}"]`
            );
            newActiveLink.classList.add('animate-underline');
          }
        }
      }, 100); // You can adjust this delay as needed.*/
  /*} else {
      event.preventDefault();
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
        // Remove the animation className for the previous active link

        // Set the active link to the new link
        activeLinkRef.current = targetId;

        // Reset the scrolling state
        setScrolling(false);
      }, 300); // Adjust the delay as needed for the scroll animation to complete

      // Add the animation className to the new active link
      if (
        currentActiveLink &&
        currentActiveLink.getAttribute('href') !== targetId
      ) {
        const newActiveLink = document.querySelector(`a[href="${targetId}"]`);
        newActiveLink.classList.add('animate-underline');
      }
    }
  };
*/

  useEffect(() => {
    if (location.pathname === '/services') {
      console.log('useEffect in menu.js ');
      // activeLinkRef.current = '/services';
      setActiveLink('/services');
    }
  }, [location]);

  console.log(activeLinkRef.current);
  const handleLinkClick = (event, targetId) => {
    if (targetId === '/services') {
      //event.preventDefault();
      // activeLinkRef.current = targetId;
      //setActiveLink(targetId);
      // Navigate('/services');
      console.log('??');
    } else if (location.pathname === '/services') {
      function updateScrollSpy() {
        console.log('updatedScrollSpy');
        const scrollSpyElement = document.querySelector(
          '[data-bs-spy="scroll"]'
        );
        if (scrollSpyElement) {
          console.log('???');

          // eslint-disable-next-line no-undef
          const scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#navbar-menu',
            smoothScroll: true,
            threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
          });
          scrollSpy.refresh();
          console.log('scrollspyelement: ', scrollSpyElement);
          console.log('scrollspy: ', scrollSpy);
        }
      }
      //activeLinkRef.current = targetId;

      Navigate(`/`);
      setActiveLink(targetId);
      setTimeout(() => {
        updateScrollSpy();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetSection.offsetTop - navbarHeight;

          setScrolling(true);

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
          setScrolling(false);
        }
      }, 50);
    } else {
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
        // Remove the animation className for the previous active link

        // Set the active link to the new link
        // activeLinkRef.current = targetId;
        setActiveLink(targetId);

        // Reset the scrolling state
        setScrolling(false);
      }, 300); // Adjust the delay as needed for the scroll animation to complete

      // Add the animation className to the new active link
      if (
        currentActiveLink &&
        currentActiveLink.getAttribute('href') !== targetId
      ) {
        const newActiveLink = document.querySelector(`a[href="${targetId}"]`);
        newActiveLink.classList.add('animate-underline');
      }
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
            <Nav defaultActiveKey={activeLink}>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspyfront'
                  href='/#scrollspyfront'
                  /*    active={
                    !scrolling && activeLinkRef.current === '#scrollspyfront'
                  }*/
                  active={!scrolling && activeLink === '#scrollspyfront'}
                  onClick={(event) => handleLinkClick(event, '#scrollspyfront')}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspyabout'
                  href='/#scrollspyabout'
                  /*active={
                    !scrolling && activeLinkRef.current === '#scrollspyabout'
                  }*/
                  active={!scrolling && activeLink === '#scrollspyabout'}
                  onClick={(event) => handleLinkClick(event, '#scrollspyabout')}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey='#scrollspycontact'
                  href='/#scrollspycontact'
                  /*active={
                    !scrolling && activeLinkRef.current === '#scrollspycontact'
                  }*/
                  active={!scrolling && activeLink === '#scrollspycontact'}
                  onClick={(event) =>
                    handleLinkClick(event, '#scrollspycontact')
                  }
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href='/services'
                  // active={activeLinkRef.current === '/services'}
                  active={activeLink === '/services'}
                  onClick={(event) => handleLinkClick(event, '/services')}
                >
                  Services
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

// export default Menu;

const TestMenu = () => {
  const [activeLink, setActiveLink] = useState('#scrollspyfront');
  const location = useLocation();
  const Navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/services') {
      setActiveLink('/services');
    } else {
      setActiveLink('#scrollspyfront');
    }
  }, [location]);

  useEffect(() => {
    const navlinks = document.querySelectorAll('#navbar-menu a');
    const k = [];
    navlinks.forEach((navlink) => k.push(navlink.getAttribute('href')));
    console.log(navlinks, k);
    console.log(location.pathname);
    const currentPathname = location.pathname;
    const servicesLinkElement = document.querySelector('a[href="/services"]');
    if (servicesLinkElement) {
      if (
        currentPathname.startsWith('/services') &&
        currentPathname !== '/services'
      ) {
        servicesLinkElement.classList.add('services-route-class');
      } else {
        servicesLinkElement.classList.remove('services-route-class');
      }
    }

    // Iterate through navlinks and compare their href with the current pathname
    navlinks.forEach((navlink) => {
      const href = navlink.getAttribute('href');
      if (href === currentPathname) {
        // Add the "active" class to the active link
        navlink.classList.add('active');
      } else {
        // Remove the "active" class from other links
        navlink.classList.remove('active');
      }
    });
  }, [Navigate, location]);

  function updateScrollSpy() {
    console.log('updatedScrollSpy');
    const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
    if (scrollSpyElement) {
      console.log('???');
      scrollSpyElement.style.overflow = '';

      // eslint-disable-next-line no-undef
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-menu',
        smoothScroll: true,
        threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
      });

      scrollSpy.refresh();

      console.log('scrollspyelement: ', scrollSpyElement);

      console.log('scrollspy: ', scrollSpy);
    }
  }

  const handleLinkClick = (event, targetId) => {
    // eslint-disable-next-line no-undef
    const k = bootstrap.Offcanvas.getInstance('.offcanvas');
    if (k) {
      k.hide();
    }
    if (targetId === '/services') {
      event.preventDefault();
      window.scrollTo({ top: '#navbar-menu' });
      if (location.pathname !== targetId) {
        Navigate('/services');
      }

      // console.log(window.scrollY);
      /* setTimeout(() => {
        updateScrollSpy();
      }, 100);*/
    }
  };

  /* useEffect(() => {
    updateScrollSpy();
  }, []);*/

  const handleExternalLink = (event, targetId) => {
    event.preventDefault();
    Navigate('/');
    setTimeout(() => {
      //updateScrollSpy();

      const temp_link = targetId.slice(1);
      //console.log(temp_link)
      const targetSection = document.querySelector(temp_link);
      if (targetSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        // setScrolling(true);

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        //setScrolling(false);
      }
    }, 50);
  };

  return (
    <>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary fixed-top'
        id='navbar-menu'
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              alt=''
              src={cabteamlogo}
              width='120'
              height='40'
              className='d-inline-block align-top'
            />{' '}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                <img
                  alt=''
                  src={cabteamlogo}
                  width='120'
                  height='40'
                  className='d-inline-block align-top'
                />{' '}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <a
                    /* className={`nav-link ${
                      activeLink === '#scrollspyfront' ? 'active' : ''
                    }`} */
                    className='nav-link front-link'
                    //aria-current='page'
                    href='/#scrollspyfront'
                    onClick={(event) =>
                      handleLinkClick(event, '#scrollspyfront')
                    }
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item '>
                  <a
                    /* className={`nav-link ${
                      activeLink === '#scrollspyabout' ? 'active' : ''
                    }`}*/
                    className='nav-link front-link'
                    //aria-current='page'
                    href='/#scrollspyabout'
                    onClick={(event) =>
                      handleLinkClick(event, '#scrollspyabout')
                    }
                  >
                    About
                  </a>
                </li>
                <li className='nav-item '>
                  <a
                    /*  className={`nav-link ${
                      activeLink === '#scrollspycontact' ? 'active' : ''
                    }`}*/
                    className='nav-link front-link'
                    //aria-current='page'
                    href='/#scrollspycontact'
                    onClick={(event) =>
                      handleLinkClick(event, '#scrollspycontact')
                    }
                  >
                    Contact
                  </a>
                </li>
                <li className='nav-item'>
                  <div className='btn-group services-dropdown'>
                    <a
                      /* className={`nav-link ${
                        activeLink === '/services' ? 'active' : ''
                      }`}*/
                      className='nav-link'
                      //aria-current='page'
                      href='/services'
                      onClick={(event) => handleLinkClick(event, '/services')}
                      //data-bs-toggle='dropdown'
                      // role='button'
                      aria-expanded='false'
                    >
                      {' '}
                      Services{' '}
                    </a>
                    {/*<Link to={'/services'}>Services</Link>*/}

                    <ul className='dropdown-menu services-dropdown-menu'>
                      <li>
                        <Link
                          to='/services/internal'
                          className='dropdown-item active'
                          href='/services/internal'
                        >
                          Internal
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/services/international'
                          className='dropdown-item'
                          href='/services/international'
                        >
                          International
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/services/logistics'
                          className='dropdown-item '
                          href='/services/logistics'
                        >
                          Logistics
                        </Link>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <Link
                          to='/services/inquiry'
                          className='dropdown-item '
                          href='/services/inquiry'
                        >
                          Make an inquiry
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='nav-item d-none d-lg-block'>
                  <Link
                    to='/services/inquiry'
                    className='nav-link '
                    href='/services/inquiry'
                  >
                    Make an inquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TestMenu;
