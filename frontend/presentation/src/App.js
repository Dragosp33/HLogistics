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

// ..
window.addEventListener('load', function () {
  AOS.refresh();
});
AOS.init();

function App() {
  // const scrollSpyRef = useRef(null);

  useEffect(() => {
    // Adjust scroll offset for Navbar height
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        console.log('targeT: ', targetId);
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop - navbarHeight;
        // set focus to current page:
        /*
          if (targetSection) {
            const firstHeading = targetSection.querySelectorAll(['a', 'button']);
            console.log(firstHeading[0]);
            if (firstHeading) {
              console.log('????????', firstHeading[0]);
              firstHeading[0].focus();
            }
          }
  */
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }, []);

  useEffect(() => {
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

  return (
    <div>
      <>
        <ToastContainer />
        <Menu />
        <Front />
        <About />
        {/*<ContactPage countries={countries} />
      <Example />
      
      */}
        <ContactPage />
        <Footer />
      </>
    </div>
  );
}

export default App;
