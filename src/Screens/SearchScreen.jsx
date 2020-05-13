import React, { useState } from 'react';
import useResults from '../hooks/useResults';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // @useState    to store searchTerm and searchResults
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    // arg: filter results by '$', '$$', '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTextChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <Text>We have found {results.length} resutls</Text>
      <ResultsList results={filterResultsByPrice('$')} title='economy' />
      <ResultsList
        results={filterResultsByPrice('$$')}
        title='average night-out'
      />
      <ResultsList
        results={filterResultsByPrice('$$$')}
        title='very grandeur very deluxe'
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
