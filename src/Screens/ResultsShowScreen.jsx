import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

// @component   displays resturant results
// 1. access item id from ResultsList in navigation prop
// 2. async/await to fetch data from yelp endpoint & setState
// 3. useEffect to call the function to fetch and rerender
// 4. FlatList to list out all images
const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  console.log(result);

  const getResult = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
  },
});

export default ResultsShowScreen;
