import LayoutParticles from './LayoutParticles';
//import LayoutParticles from './LayoutParticles';

const Front = ({ scrollspyref }) => {
  return (
    <section id='scrollspyfront' ref={scrollspyref}>
      {/*<div className='img-fluid' style={style}></div>*/}

      <LayoutParticles />

      <div className='front-container'>
        <div className='container-fluid p-5 background'>
          <div className='container h-100 d-flex align-items-center front-particles'>
            <div className='row d-flex justify-content-center align-items-start flex-column gap-4'>
              <div className='col'>
                <div data-aos='fade-right' data-aos-duration='1800'>
                  <h3 style={{ color: 'white' }}>
                    {' '}
                    Make your shipments great{' '}
                  </h3>
                </div>
              </div>
              <div className='col'>
                <h3 style={{ color: 'white' }}> Connect the dots</h3>
              </div>
              <div className='col'>
                <a
                  href='#scrollspyabout'
                  style={{ color: 'white' }}
                  className='btn btn-outline-dark btn-move-up btn-lg fw-semibold px-5'
                  tabIndex={0}
                >
                  {' '}
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front;
