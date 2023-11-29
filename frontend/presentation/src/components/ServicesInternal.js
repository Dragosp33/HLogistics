import { Link } from 'react-router-dom';
import international from './images/international2.jpg';
import internal from './images/internal_main.jpg';
import internal2 from './images/internal_second.png';

const ServicesInternal = () => {
  return (
    <>
      <div
        className='container-fluid'
        style={{ height: '100px', backgroundColor: 'rgb(248, 248, 248)' }}
      >
        <div className='container-lg services-header'>
          <h3> Internal </h3>
          <nav className='breadCrumbNav' aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='/services'>Services</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Internal
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section id='servicesInternal'>
        <div className='container-lg'>
          <div class='row row-cols-1 row-cols-md-2 g-4'>
            <div class='col'>
              <div class='card h-100 px-0 pt-0'>
                <img
                  src={internal}
                  class='card-img-top'
                  alt='...'
                  style={{ maxHeight: '400px' }}
                />
                <div class='card-body'>
                  <h5 class='card-title'>Based in Romania</h5>
                  <p class='card-text'>
                    Based in Romania, with more than a decade of experience, our
                    internal transport services are for sure the next thing to
                    perfection
                  </p>
                </div>
              </div>
            </div>
            <div class='col'>
              <div class='card h-100 px-0 pt-0'>
                <img
                  src={internal2}
                  class='card-img-top'
                  alt='...'
                  style={{ maxHeight: '400px' }}
                />
                <div class='card-body'>
                  <h5 class='card-title'>Custom fleet </h5>
                  <p class='card-text'>
                    We provide a custom fleet that perfectly fits your needs
                    when it comes to local transport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInternal;
