import React, { useState } from 'react';
import useResults from '../hooks/useResults';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  console.log(navigation);
  // @useState    to store searchTerm and searchResults
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    // arg: filter results by '$', '$$', '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTextChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <ScrollView>
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$')}
          title='economy'
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$')}
          title='average night-out'
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$$')}
          title='very grandeur very deluxe'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
