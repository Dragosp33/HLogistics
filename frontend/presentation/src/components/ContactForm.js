import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import * as formik from 'formik';
import { Field } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import EmailSender from '../services/EmailSender';
import AutocompleteSearch from './AutoComplete';

function ContactForm() {
  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0];
  const { Formik } = formik;
  /* const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
*/
  const schema = yup.object().shape({
    firstName: yup.string().required('Required!'),
    lastName: yup.string().required('Required!'),

    email: yup.string().email('Invalid email address').required('Required'),

    company: yup.string(),
    departureAddress: yup.string().required('Required!'),

    destinationAddress: yup.string().required('Required!'),

    departureDate: yup.date().required(),
    arrivalDate: yup.date().required(),
  });

  function setMin(date) {
    let minArrivalDate = '';
    let departureDate = '';
    if (date !== '') {
      departureDate = new Date(date);
    } else {
      departureDate = new Date();
    }
    departureDate.setDate(departureDate.getDate() + 1); // Add 1 day
    minArrivalDate = departureDate.toISOString().split('T')[0];
    return minArrivalDate;
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { resetForm, setFieldValue }) => {
        // Your form submission logic here

        try {
          const result = await toast.promise(
            EmailSender.sendMailInformation(values), // Call your function and pass formData
            {
              pending: 'Sending offer...', // Shown while promise is pending
              success: {
                render() {
                  return `Your offer was sent successfully! 
                          You should shortly receive a confirmation`;
                },
                // other options
                pauseOnHover: false,
                position: 'top-center',
              },

              error: 'Make sure your mail is valid', // Shown on error

              // You can add other options like autoClose, position, etc.
            }
          );
        } catch (error) {
          // Handle errors from the toast.promise here
          toast.error('Error...', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
        resetForm({ values: '' });
        // setFieldValue('departureAddress', '');
        // console.log('value afteR: ', values);
        //EmailSender.sendMailInformation(values);
        const elements = window.$('select');

        elements.each(function () {
          window.$(this).selectpicker('val', '');
        });
      }}
      initialValues={{
        firstName: '',
        lastName: '',

        email: '',
        departureAddress: '',

        // price: '',

        destinationAddress: '',
        //  destinationCity: '',
        departureDate: todayFormatted,
        arrivalDate: setMin(todayFormatted),
        company: '',
        phone: '',

        // terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        handleBlur,
        values,
        touched,
        errors,
        initialValues,
      }) => (
        <>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className='mb-1'>
              <div>
                <p className='group-info'> Contact informations </p>
                <p className='fw-light'>
                  {' '}
                  Enter the contact person's informations
                </p>
              </div>
              <Form.Group as={Col} md='4' controlId='validationFormik01'>
                <Form.Label>First name</Form.Label>

                <Form.Control
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={touched.firstName && !!errors.firstName}
                  onBlur={handleBlur}
                  isValid={touched.firstName && !errors.firstName}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='validationFormik02'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  onBlur={handleBlur}
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='validationFormik03'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  autoComplete='email'
                  name='email'
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                  isValid={touched.email && !errors.email}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-1'>
              <Form.Group as={Col} md='6' controlId='phoneNumber'>
                <Form.Label>Phone number</Form.Label>

                <PhoneInput
                  inputProps={{
                    id: 'phoneNumber',
                  }}
                  name='phoneNumber'
                  id='phoneNumber'
                  value={values.phone}
                  onChange={(value) => setFieldValue('phone', value)}
                  onBlur={handleBlur}
                />
              </Form.Group>

              {/* row for company and phone 
               <Row className='mb-1'>
              <Form.Group as={Col} md='6' controlId='validationFormikPhone'>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type='text'
                  autoComplete='phone'
                  name='phone'
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={touched.phone && !!errors.phone}
                  isValid={touched.phone && !errors.phone}
                />
              </Form.Group>

              
           */}

              <Form.Group as={Col} md='6' controlId='validationFormikCompany'>
                <Form.Label>Company </Form.Label>
                <Form.Control
                  type='text'
                  autoComplete='company'
                  name='company'
                  value={values.company}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-1'>
              {/*}
              <div>
                <p className='group-info'> Departure </p>
                <p className='fw-light'> Choose the departure location</p>
              </div>
              <Form.Group as={Col} md='6' controlId='validationFormik04'>
                <Form.Label>Departure Country</Form.Label>

                <Form.Control
                  as='select'
                  className='searchDepartureCountry'
                  data-live-search='true'
                  data-size='6'
                  name='departureAddress'
                  defaultValue={values.departureAddress}
                  //value={values.departureAddress}
                  placeholder='select departure Country'
                  data-live-search-normalize='true'
                  onChange={(e) => {
                    const country = e.target.value;
                    setFieldValue('departureAddress', country); // Update the field value
                    handleChange(e); // Handle change event as usual
                  }}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.departureAddress && !!errors.departureAddress
                  }
                  isValid={touched.departureAddress && !errors.departureAddress}
                >
                  {countries === null ? (
                    <option>Loading</option>
                  ) : (
                    countries.map((country) => (
                      <option
                        value={`${country.code}|${country.name}`}
                        key={country.code}
                      >
                        {' '}
                        {country.name}{' '}
                      </option>
                    ))
                  )}
                </Form.Control>

                <Form.Control.Feedback type='invalid'>
                  {errors.departureAddress}
                    </Form.Control.Feedback>*/}
              <div className='form-group'>
                <div>
                  <p className='group-info'> Departure and Destination </p>
                  <p className='fw-light'>
                    {' '}
                    Enter addresses for departure and destination{' '}
                  </p>
                </div>
                <label htmlFor='departureAddress'>Departure Address</label>
                <Field
                  autocompleteId='departureAddress'
                  component={AutocompleteSearch}
                  setFieldValue={setFieldValue}
                  //  setFieldValue={setFieldValue} // Pass setFieldValue to AutocompleteSearch component
                />
              </div>
              {/*}
              <Form.Group as={Col} md='6' controlId='validationFormik05'>
                <Form.Label>Departure City</Form.Label>

                <Form.Control
                  as='select'
                  className='pick-departure'
                  data-live-search='true'
                  data-size='6'
                  name='departureCity'
                  value={values.departureCity}
                  placeholder='select departure city'
                  data-live-search-normalize='true'
                  onChange={(e) => {
                    const selectedCity = e.target.value;
                    handleChange(e);
                    console.log(selectedCity);
                  }}
                >
                  <CitiesSelect
                    countryCode={values.departureAddress}
                    pickerClass={'pick-departure'}
                  />
                  <option value='Other' key='Other'>
                    {' '}
                    Other{' '}
                  </option>
                </Form.Control>
                </Form.Group>*/}
            </Row>
            {/* destination Country and City here:*/}

            <Row className='mb-1'>
              <div className='form-group'>
                <label htmlFor='destinationAddress'>Destination Address</label>
                <Field
                  autocompleteId='destinationAddress'
                  component={AutocompleteSearch}
                  setFieldValue={setFieldValue}
                  //  setFieldValue={setFieldValue} // Pass setFieldValue to AutocompleteSearch component
                />
              </div>
              {/*}
              <Form.Group as={Col} md='6' controlId='validationFormik06'>
                <Form.Label>Destination Country</Form.Label>

                <Form.Control
                  as='select'
                  className='searchDestinationCountry'
                  data-live-search='true'
                  data-size='6'
                  name='destinationAddress'
                  placeholder='select country'
                  data-live-search-normalize='true'
                  value={values.destinationAddress}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  isInvalid={
                    touched.destinationAddress && !!errors.destinationAddress
                  }
                  isValid={
                    touched.destinationAddress && !errors.destinationAddress
                  }
                >
                  {countries === null ? (
                    <option>Loading</option>
                  ) : (
                    countries.map((country) => (
                      <option
                        value={`${country.code}|${country.name}`}
                        key={country.code}
                      >
                        {' '}
                        {country.name}{' '}
                      </option>
                    ))
                  )}
                </Form.Control>

                <Form.Control.Feedback type='invalid'>
                  {errors.destinationAddress}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md='6' controlId='validationFormik07'>
                <Form.Label>Destination City</Form.Label>

                <Form.Control
                  as='select'
                  className='pick-destination'
                  data-live-search='true'
                  data-size='6'
                  name='destinationCity'
                  data-live-search-normalize='true'
                  value={values.destinationCity}
                  placeholder='select city'
                  onChange={(e) => {
                    const selectedDestCity = e.target.value;
                    handleChange(e);
                    console.log('destination city: ', selectedDestCity);
                  }}
                >
                  <CitiesSelect
                    countryCode={values.destinationAddress}
                    pickerClass={'pick-destination'}
                  />
                </Form.Control>
                </Form.Group> */}
            </Row>
            <Row className='mb-1'>
              <div>
                <p className='group-info'>Dates </p>
                <p className='fw-light'>
                  {' '}
                  Enter desired dates for departure and arrival
                </p>
              </div>
              <Form.Group as={Col} md='6' xs='6' controlId='validationFormik08'>
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type='date'
                  name='departureDate'
                  min={todayFormatted}
                  onBlur={handleBlur}
                  value={values.departureDate}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (newValue === '') {
                      // If it's empty, set it back to the initial value
                      handleChange({
                        target: {
                          name: 'departureDate',
                          value: initialValues.departureDate,
                        },
                      });
                    } else {
                      handleChange(e);
                      //console.log(e.target.value);

                      let tempDate = new Date(e.target.value);
                      let tempDate2 = new Date(values.arrivalDate);
                      if (tempDate.getDate() >= tempDate2.getDate()) {
                        setFieldValue('arrivalDate', setMin(e.target.value));
                      }
                    }
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.departureDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='6' xs='6' controlId='validationFormik09'>
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control
                  type='date'
                  name='arrivalDate'
                  min={setMin(values.departureDate)}
                  value={values.arrivalDate}
                  //onChange={handleChange}
                  onChange={(e) => {
                    // Check if the new value is empty
                    const newValue = e.target.value;
                    if (newValue === '') {
                      // If it's empty, set it back to the initial value
                      handleChange({
                        target: {
                          name: 'arrivalDate',
                          value: initialValues.arrivalDate,
                        },
                      });
                    } else {
                      handleChange(e);
                    }
                  }}
                  onBlur={handleBlur}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.arrivalDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <div className='col mt-3 d-flex justify-content-center'>
              {' '}
              <Button type='submit' className='px-5'>
                Send your offer <i className='bi bi-send'></i>
              </Button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default ContactForm;
