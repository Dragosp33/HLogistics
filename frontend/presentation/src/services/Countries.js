import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/region/europe';

const getCountries = async () => {
  const response = await axios.get(baseUrl);
  // console.log('response data: ', response.data);
  /*const objs = response.data.map((country) => ({
    name: country.name.common,
    code: country.cca2,
  }));
  return objs; */
  return response.data;
};

const getCountryCities = async (countryCode) => {
  const options = {
    method: 'GET',
    url: `https://countries-cities.p.rapidapi.com/location/country/${countryCode}/city/list`,

    params: {
      page: '1',
      per_page: '50',
      population: '150000',
    },
    headers: {
      'X-RapidAPI-Key': 'e87d5289c5msha042d6124a450f0p13c0b2jsn9ac75e7ef4f6',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    //console.log('raspuns cu: ', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/*
const getCountryCities = async (countryCode) => {
  const limit = '20';
  const options = {
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
    params: {
      countryIds: countryCode,
      types: 'CITY',
      //limit: limit,
      sort: '-population',
    },
    headers: {
      'X-RapidAPI-Key': 'e87d5289c5msha042d6124a450f0p13c0b2jsn9ac75e7ef4f6',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
*/
export default { getCountries, getCountryCities };
