import ContactForm from './ContactForm';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const ContactPage = ({ scrollspyref }) => {
  return (
    <section id='scrollspycontact' ref={scrollspyref}>
      <div className='container-fluid  pb-3 mb-5'>
        <div className='row contact-flex'>
          <div className='col-lg-6' id='contact-left'>
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Details on the right */}

          <div className='col-lg-6' id='contact-right'>
            <div className='d-flex-column justify-content-space-between'>
              <div>
                {' '}
                <h3> Send us an offer! </h3>
                <p> Complete the form informations and send us your offer. </p>
                <p>
                  {' '}
                  You should enter a valid email address and phone number, as we
                  will use them to contact you.
                </p>
                <p>
                  {' '}
                  Remember to enter the country code in your phone number as
                  well
                  <br />
                  (ex: for Romania: +40 123 456 789)
                </p>
                <p>
                  {' '}
                  As we think communication is key, we made it easier for both
                  parties, by specifying the location of departure and arrival,
                  as well as their dates. <br />
                  Try typing in the zip code, or the full address, as
                  suggestions pop up
                </p>
              </div>
              <div className='contact-direct'>
                <h5> Or contact us directly</h5>
                <ListGroup as='ol' variant='flush'>
                  <ListGroup.Item
                    as='li'
                    className='d-flex justify-content-between align-items-start'
                  >
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Phone</div>
                      <a href='tel:+40756045267' target='blank'>
                        {' '}
                        (+40) 756 045 267{' '}
                      </a>
                    </div>
                    <Badge pill id='phoneBadge'>
                      <i className='bi bi-telephone-fill'></i>
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as='li'
                    className='d-flex justify-content-between align-items-start'
                  >
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Email</div>
                      <a href='mailto:dragosp0201@gmail.com'>
                        {' '}
                        dragosp0201@gmail.com{' '}
                      </a>
                    </div>

                    <i className='bi bi-envelope-at-fill'></i>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as='li'
                    className='d-flex justify-content-between align-items-start'
                  >
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Location</div>
                      Street, 123, Bals, Olt, Romania
                    </div>

                    <i className='bi bi-geo-alt-fill'></i>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              {/* }
            <div className='dbox w-100 d-flex align-items-start'>
              <h6> Or contact us directly: </h6>
              <ul>
                <li>
                  {' '}
                  Phone: <i className='bi bi-telephone-fill'></i> 0756045267
                </li>
                <li>
                  Mail: <i className='bi bi-envelope-fill'></i>{' '}
                  dragosp0201@gmail.com
                </li>
              </ul>
  </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
