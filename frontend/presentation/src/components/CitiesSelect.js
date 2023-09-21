import React, { useState, useEffect } from 'react';

import CountriesService from '../services/Countries';

const CitiesSelect = ({ countryCode, pickerClass }) => {
  const [cities, setCities] = useState([
    { name: 'Cities Loading', key: 'Cities Loading' },
  ]);

  useEffect(() => {
    async function getCities() {
      if (countryCode !== '') {
        console.log('it hit me');
        const code = countryCode.slice(0, 2);

        const response = await CountriesService.getCountryCities(code);
        console.log('raspuns in useeffect citiesselect: ', response);
        if (response !== null) {
          console.log('response not null');
          setCities(
            response.cities.map((city) => ({
              name: city.name,
              key: city.geonameid,
            }))
          );
        } else {
          setCities([]);
        }
      } else {
        setCities([{ name: 'Cities Loading', key: 'Cities Loading' }]);
      }
    }

    getCities();
  }, [countryCode]);

  useEffect(() => {
    console.log('called 2nd useeffect');

    window.$(`.${pickerClass}`).selectpicker('destroy');
    window.$(`.${pickerClass}`).selectpicker('val', cities);

    window
      .$(`.${pickerClass} input[type="search"]`)
      .attr({ name: 'searchDepartureCity', 'aria-expanded': 'false' });
    window.$(`.${pickerClass} .inner`).attr('title', 'departureCityList');
  }, [cities, pickerClass]);
  console.log('countryCode in component:', countryCode);
  console.log('cities in component: ', cities);

  return (
    <>
      {cities.map((city) => (
        <option value={city.name} key={city.key}>
          {city.name}
        </option>
      ))}
    </>
  );
};

export default React.memo(CitiesSelect);
