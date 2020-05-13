import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

// @component   Take filtered result from parent component and FlatList render
// 1. checks for results length: if 0 return nothing
// 2. wrap component in withNavigation HOC to get navigation prop
// 3. use FlatList to renderItem for each result and store parameter in navigation prop
const ResultsList = ({ title, results, navigation }) => {
  if (results.length == 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>

      <FlatList
        data={results}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item, ind }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Result', { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
