import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

// @useResults    a custom hook to fetch data at yelp on startup
export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setError] = useState('');

  //   @note  asynchronous function for data fetching wiht axios
  const searchAPI = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'toronto',
        },
      });
      setResults(res.data.businesses);
    } catch (error) {
      setError('Something went very very wrong');
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    searchAPI('pizza');
  }, []);

  return [searchAPI, results, errorMsg];
};
