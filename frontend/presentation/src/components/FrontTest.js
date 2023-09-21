import React from 'react';
import { useFormik } from 'formik';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for React Phone Input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const Example = () => {
  const initialValues = {
    phoneNumber: '', // Initialize the phone number field with an empty string
    // Add other form fields and initial values here
  };

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values.phoneNumber); // Access the phone number value
  };

  const validate = (values) => {
    const errors = {};

    // Add validation rules for other form fields if needed

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={console.log}>
      {/* Phone Input */}
      <PhoneInput
        name='phoneNumber'
        id='phoneNumber'
        country={'us'} // Set the default country or leave it blank to allow any country
        value={formik.values.phoneNumber}
        onChange={(value) => formik.setFieldValue('phoneNumber', value)}
        onBlur={formik.handleBlur}
        containerClass='input-container'
        inputClass='input-field'
      />
      {formik.errors.phoneNumber && formik.touched.phoneNumber && (
        <div className='error'>{formik.errors.phoneNumber}</div>
      )}

      {/* Add other form fields here */}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Example;
