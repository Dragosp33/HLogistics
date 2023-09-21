import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function SymbolInput({ onSymbolInputChange, countries }) {
  const symbols = countries;

  const [dropdownText, setDropdownText] = useState('phone code'); // Local state for dropdown text
  const [selectedSymbol, setSelectedSymbol] = useState(null); // Local state for the selected symbol object

  const handleSymbolClick = (symbol) => {
    const flagImage = `<img src="${symbol.flag}" alt="Flag" />`;
    setDropdownText(`${symbol.root} ${flagImage}`); // Update the local state with an image
    setSelectedSymbol(symbol); // Update the selected symbol object
    onSymbolInputChange(symbol.root); // Pass the symbol to the parent component
  };

  return (
    <div className='input-group mb-3'>
      <button
        className='btn btn-outline-secondary dropdown-toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <span dangerouslySetInnerHTML={{ __html: dropdownText }} />
        {/* Render the HTML */}
      </button>
      <ul className='dropdown-menu phone-select'>
        {symbols.map((symbol) => (
          <li key={symbol.name}>
            <button
              className='dropdown-item'
              type='button'
              value=''
              onClick={() => handleSymbolClick(symbol)}
            >
              <img src={symbol.flag} alt=''></img> {symbol.root}
            </button>
          </li>
        ))}
        <li>
          <hr className='dropdown-divider' />
        </li>
      </ul>
      <Field
        type='text'
        className='form-control'
        name='inputValue'
        aria-label='Phone'
        id='phone'
        autoComplete='phone'
      />
    </div>
  );
}

function FormikForm({ countries }) {
  const validatePhoneNumber = (selectedSymbol, inputValue) => {
    // You can define your phone number validation logic here
    const phoneRegExp =
      /^((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/; // Change this regex to match your validation criteria

    const combinedPhoneNumber = `${selectedSymbol} ${inputValue.trim()}`;
    console.log(combinedPhoneNumber);

    if (!phoneRegExp.test(combinedPhoneNumber)) {
      return 'Phone number is not valid';
    }

    return undefined; // Validation passed
  };
  const validationSchema = Yup.object().shape({
    selectedSymbol: Yup.string().required('Symbol is required'),
    inputValue: Yup.string()
      .required('Input Value is required')
      .test('phone-validation', 'Phone number is not valid', function (value) {
        const selectedSymbol = this.parent.selectedSymbol || '';
        // console.log(selectedSymbol);
        return validatePhoneNumber(selectedSymbol, value);
      }),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        selectedSymbol: 'phone code',
        inputValue: '',
      }}
      onSubmit={(values) => {
        console.log('Selected Symbol:', values.selectedSymbol);
        console.log('Input Value:', values.inputValue);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <SymbolInput
            countries={countries}
            onSymbolInputChange={(symbol) =>
              setFieldValue('selectedSymbol', symbol)
            }
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
