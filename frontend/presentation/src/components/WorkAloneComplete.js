import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkAloneComplete = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const apiKey = 'TCsYLGinwwfGcrK6_Yo3uDMTnKgSz-_UdVTRlPJUW_I'; // Replace with your Here API key

  useEffect(() => {
    if (inputText.trim() !== '' && inputText !== selectedSuggestion) {
      axios
        .get(
          `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${inputText}&apiKey=${apiKey}&limit=10`
        )
        .then((response) => {
          const results = response.data.items.map((item) => item.title);
          setSuggestions(results);
          setShowSuggestions(true); // Show suggestions when available
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
  }, [inputText, selectedSuggestion, apiKey]);

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
    setShowSuggestions(false); // Hide suggestions when a suggestion is clicked
  };

  return (
    <div className='autocomplete-container col-md-6'>
      <div className='dropdown'>
        <input
          type='text'
          placeholder='Enter location'
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setSelectedSuggestion(null); // Reset selected suggestion when input changes
          }}
          className='form-control dropdown-toggle'
          data-toggle='dropdown' // Toggle dropdown using Bootstrap data attributes
        />
        {showSuggestions && (
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

export default WorkAloneComplete;
