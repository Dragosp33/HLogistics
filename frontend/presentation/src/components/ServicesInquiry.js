import { Card } from 'react-bootstrap';
import ContactForm from './ContactForm';

const ServicesInquiry = () => {
  return (
    <>
      <div
        className='container-fluid'
        style={{ height: '100px', backgroundColor: 'rgb(248, 248, 248)' }}
      >
        <div className='container-lg services-header'>
          <h3> Inquiry </h3>
          <nav className='breadCrumbNav' aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='/services'>Services</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Inquiry
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section id='services-inquiry'>
        <div
          className='container-lg inquiry-flex d-flex flex-column flex-lg-row align-items-center'
          style={{ position: 'relative' }}
        >
          <Card className=''>
            <Card.Header>
              <Card.Title>Send an offer</Card.Title>
            </Card.Header>
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>

          <div className='inquiry-contact-page d-flex flex-column'>
            <div style={{ position: 'relative', top: '0' }}>
              <h5> Cabteam Contact</h5>
              <p>
                For any inconvenience, update informations or discussions, don't
                hesitate to contact us.
              </p>
              <p>
                If you have a question, choose one of the contact options to get
                in touch
              </p>
            </div>

            {/*accordion here */}
            <div class='accordion' id='accordionExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button d-flex flex-row'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <div>Email: cabteam@info.ro</div>
                    <div
                      class=''
                      style={{
                        position: 'absolute',
                        right: '10%',
                        alignSelf: 'center',
                      }}
                    >
                      <i class='bi bi-envelope'></i>
                    </div>
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>Main address:</strong> cabteam@info.ro
                    <div>
                      Try other
                      <ul style={{ listStyle: 'none' }}>
                        <li> SecondMail@cabteam.ro</li>
                        <li> ThirdMail@cabteam.ro</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Phone: +40 712 345 678
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>{' '}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInquiry;
