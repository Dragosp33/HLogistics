const About = ({ scrollspyref }) => {
  const goToForm = (event, targetId) => {
    event.preventDefault();

    // Scroll to the target section
    const targetSection = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <section id='scrollspyabout' ref={scrollspyref}>
      <div className='container-fluid pt-5 pb-3 mb-5'>
        <div className='row' id='about-row'>
          {/* Photo on the left */}
          <div className='col-lg-6'>
            <div data-aos='fade-up' data-aos-duration='1200' id='image-trigger'>
              <div className='main-image' id='about-main-image'></div>
            </div>
          </div>

          {/* Details on the right */}
          <div className='col-lg-6' id='about-right'>
            <div className='card border-0 '>
              <div data-aos='fade-up' data-aos-duration='1200'>
                <div className='card-header'>About us</div>
              </div>
              <div className='card-body'>
                <div data-aos='fade-up' data-aos-duration='1200'>
                  <h5 className='card-title mb-5'>
                    {' '}
                    Shipping company established in Romania{' '}
                  </h5>
                </div>
                <div data-aos='fade-right' data-aos-duration='1200'>
                  <p className='card-text lh-lg'>
                    With thousands of successfully fulfilled shipments, and as
                    many pleased partners, at{' '}
                    <span id='firstCompanyName'>H-</span>
                    <span id='secondCompanyName'>Logistics </span>
                    we value promptness, availability and a good manner of
                    communication.
                  </p>
                  <p className='card-text lh-lg'>
                    As we think the journey is as important as the destination,
                    we make sure your shipment gets there on time, in best
                    conditions, as we constantly stay in touch with our workers
                    regarding the status of your shipment.
                  </p>
                </div>
                <div
                  className='mt-5 pt-5'
                  data-aos='fade-right'
                  data-aos-duration='1200'
                >
                  <div className='border-0' id='about_button'>
                    {' '}
                    <a
                      href='#scrollspycontact'
                      tabIndex={0}
                      onClick={(event) => goToForm(event, '#contact-left')}
                    >
                      {' '}
                      Lets Work Together{' '}
                    </a>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
