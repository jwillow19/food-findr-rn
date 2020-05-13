import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTextChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1' style={styles.iconStyle} color='black' />
      <TextInput
        placeholder='Search'
        style={styles.textInput}
        value={term}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={onTextChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
