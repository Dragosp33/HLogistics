import ContactForm from './ContactForm';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from './geo-alt-fill.svg';

import 'leaflet/dist/leaflet.css';

const ContactPage = ({ scrollspyref }) => {
  const customIcon = L.icon({
    iconUrl: icon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point as needed
    popupAnchor: [0, -15],
  });

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
                    className='d-flex justify-content-between align-items-start location-container'
                  >
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Location</div>
                      Street Nicolae Balcescu, 123, Bals, Olt, Romania
                      <i className='bi bi-geo-alt-fill'></i>
                    </div>
                    <div style={{ height: '300px', width: '100%' }}>
                      <MapContainer
                        center={[44.344336, 24.119345]}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }}
                      >
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker
                          position={[44.344336, 24.119345]}
                          icon={customIcon}
                        >
                          <Popup>Street, 123, Bals, Olt, Romania</Popup>
                        </Marker>

                        <a
                          //href={`https://www.google.com/maps?q=${44.344336},${24.119345}`}
                          href={`https://www.google.com/maps?q=44.344336,24.119345`}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={() => {
                            window.location.href = `geo:0,0?q=44.344336,24.119345(${encodeURIComponent(
                              'HLogistics Team'
                            )})`;
                          }}
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            backgroundColor: 'black',
                            color: 'white',
                            zIndex: '999',
                          }}
                        >
                          Open in Google Maps
                        </a>
                      </MapContainer>
                    </div>
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
