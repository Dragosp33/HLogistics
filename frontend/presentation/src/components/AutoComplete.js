import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useField, useFormikContext } from 'formik';

const AutocompleteSearch = ({ autocompleteId }) => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState(false);

  const apiKey = 'TCsYLGinwwfGcrK6_Yo3uDMTnKgSz-_UdVTRlPJUW_I';
  const bounds = 'bbox:-30.0,30.0,45.0,70.0';

  const { setFieldValue } = useFormikContext();
  const [field] = useField(autocompleteId);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputText.trim() !== '' && !suggestionSelected) {
      axios
        .get(
          `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${inputText}&apiKey=${apiKey}&limit=10&lang=en&postalCodeMode=cityLookup&type=postalCode`
        )
        .then((response) => {
          // console.log('?', response.data.items[0]);
          const results = response.data.items.map((item) => item.title);
          setSuggestions(results);
          setShowSuggestions(true);
        })
        .catch((error) => {
          console.error('Error fetching suggestions:', error);
          setSuggestions([]);
          setShowSuggestions(false);
        });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputText, apiKey, field.value, suggestionSelected]);

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    //setSelectedSuggestionIndex(-1);
    setFieldValue(autocompleteId, suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    setSuggestionSelected(true);
  };

  // blur and focus here:
  let blurTimer; // Initialize a timer variable

  const handleBlur = () => {
    // Delay the hiding of suggestions to allow time for a click to occur
    setTimeout(() => {
      if (!document.body.contains(document.activeElement)) {
        setShowSuggestions(false);
      }
    }, 100);
  };

  // Handle click on document body
  const handleDocumentClick = (e) => {
    // Check if the click target is not within the dropdown menu
    const dropdownMenu = document.querySelector('.dropdown');
    // console.log(e.target);
    if (dropdownMenu && !dropdownMenu.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    // Attach a click event listener to the document body
    document.body.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const handleFocus = () => {
    // Clear the timer when the input field receives focus
    clearTimeout(blurTimer);
    setShowSuggestions(true);
  };

  // add key-strokes events:

  return (
    <div className='autocomplete-container col mb-1'>
      <div className='dropdown' tabIndex={0}>
        <input
          type='text'
          id={autocompleteId}
          placeholder='type in the zip code or the full address'
          {...field}
          ref={inputRef}
          onChange={(e) => {
            setInputText(e.target.value);
            field.onChange(e);
            setSuggestionSelected(false);
          }}
          onBlur={(e) => handleBlur(e)}
          onFocus={handleFocus} // Add the onFocus event handler
          className='form-control dropdown-toggle'
          data-toggle='dropdown'
        />
        {/*}
        <div id={`${autocompleteId}Helper`} class='form-text'>
          type in the zip code or the full address
        </div>*/}
        {showSuggestions && suggestions.length > 0 && (
          <div className='dropdown-menu show'>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className='dropdown-item'
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearch;
