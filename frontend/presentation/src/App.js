import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import Front from './components/Front';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
//react-toastify:
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactPage from './components/ContactPage';
import { useLocation, useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import ServicesPage from './components/Services';

// ..
window.addEventListener('load', function () {
  AOS.refresh();
});
AOS.init();

function App() {
  const Navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    // Adjust scroll offset for Navbar height
    updateScrollSpy();
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const navLinks = document.querySelectorAll('.navbar .front-link');
    const targets = ['/'];
    navLinks.forEach((link) => targets.push(link.getAttribute('href')));
    console.log(targets);

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        if (!targets.includes(window.location.pathname)) {
          // eslint-disable-next-line no-undef
          const k = bootstrap.Offcanvas.getInstance('.offcanvas');
          if (k) {
            k.hide();
          }
          console.log(window.location.pathname, ' not in pathname array');
          Navigate('/');

          setTimeout(() => {
            const targetId = link.getAttribute('href').slice(1);
            console.log('targeT: ', targetId);
            const targetSection = document.querySelector(targetId);
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth',
            });
            updateScrollSpy();
          }, 50);
        } else {
          const targetId = link.getAttribute('href').slice(1);
          console.log('targeT: ', targetId);
          const targetSection = document.querySelector(targetId);
          const targetPosition = targetSection.offsetTop - navbarHeight;
          // set focus to current page:

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }, [Navigate]);

  /*  useEffect(() => {
    updateScrollSpy();
    const path = window.location;
    console.log('path in app.js: ', path);
  }, [Navigate]);*/

  console.log('app.js render');
  useEffect(() => {
    console.log('selectpicker effect');
    window.$('#validationFormik04').selectpicker();
    window
      .$('.searchDepartureCountry input[type="search"]')
      .attr({ name: 'searchDepartureCountry', 'aria-expanded': 'false' });
    window
      .$('.searchDepartureCountry .inner')
      .attr('title', 'departureCountryList');

    window.$('#validationFormik06').selectpicker();
    window
      .$('.searchDestinationCountry input[type="search"]')
      .attr({ name: 'searchDestinationCountry', 'aria-expanded': 'false' });
    window
      .$('.searchDestinationCountry .inner')
      .attr('title', 'destinationCountryList');
  });

  function NavigateToHome() {
    useEffect(() => {
      console.log('si aici e belea');
      Navigate('/');
    }, []);
  }

  return (
    <>
      <ToastContainer />
      <Menu />
      <Routes>
        <Route
          path='/services/*'
          element={
            <>
              <ServicesPage />
            </>
          }
        ></Route>
        <Route
          path='*'
          element={
            <div>
              <>
                <Front />
                <About />
                {/*<ContactPage countries={countries} />
      <Example />
      
      */}
                <ContactPage />
              </>
            </div>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
