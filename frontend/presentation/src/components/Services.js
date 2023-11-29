import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ServicesInternal from './ServicesInternal';
import ServicesCarousel from './ServicesCarousel';
import ServicesInquiry from './ServicesInquiry';
import ServicesInternational from './ServicesInternational';

const ServicesPage = () => {
  return (
    <>
      <div
        className='container-fluid'
        style={{ height: '100px', backgroundColor: 'rgb(248, 248, 248)' }}
      >
        <div className='container-lg services-header'>
          <h3> Services </h3>
          <nav className='breadCrumbNav' aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>

              <li className='breadcrumb-item active' aria-current='page'>
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section id='services'>
        <div className='container-lg mt-4 services-grid'>
          <div className=' carousel-container'>
            <ServicesCarousel />
          </div>
          <div className=' px-3 description-container'>
            <h5 className='mt-3'> About our services </h5>
            <p className='mt-3'>
              {' '}
              From Logistics to Internal, to International transport, we provide
              the best solutions to your business so you can achieve your goals
            </p>
            <div
              className='d-flex align-items-center'
              style={{ justifyContent: 'space-evenly' }}
            >
              <h6 style={{ maxWidth: '50%' }}>
                {' '}
                Learn more on our dedicated pages{' '}
              </h6>
              <div style={{ width: '180px' }}>
                <ul>
                  <li className='link-container'>
                    <i class='bi bi-arrow-right-short'></i>
                    <Link to='/services/logistics'> Logistics </Link>
                  </li>
                  <li>
                    <hr className='divider' />
                  </li>
                  <li className='link-container'>
                    <i class='bi bi-arrow-right-short'></i>
                    <Link to='/services/internal'> Internal </Link>
                  </li>
                  <li>
                    <hr className='divider' />
                  </li>
                  <li className='link-container'>
                    <i class='bi bi-arrow-right-short'></i>
                    <Link to='/services/international'> International </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*added content here */}
          <div className='px-3 added-content'>
            <h5 className='mt-3'> Contact & Inquiries </h5>
            <p className='mt-3'>
              {' '}
              For any questions or inquiries, visit our{' '}
              <Link to='/services/inquiry'> Inquiry page</Link>. You can either
              complete the form for a direct inquiry or choose one of the
              available contact options
            </p>
            <p> </p>
            <div>
              <h6>
                {' '}
                As we value our time and yours as well, we are known for our
                short-time replies, promptness and reliability{' '}
              </h6>
              <div>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function ServicesRouter() {
  return (
    <Routes>
      <Route path='/*' element={<ServicesPage />}></Route>
      <Route path='internal' element={<ServicesInternal />}>
        {' '}
      </Route>
      <Route path='international' element={<ServicesInternational />}>
        {' '}
      </Route>

      <Route path='inquiry' element={<ServicesInquiry />}>
        {' '}
      </Route>
    </Routes>
  );
}

export default ServicesRouter;
