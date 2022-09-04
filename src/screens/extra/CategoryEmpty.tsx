import React from 'react';
import {View, Text} from 'react-native';

const CategoryEmpty = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DDE6EE',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 24}}>Estas en categorías</Text>
    </View>
  );
};

export default CategoryEmpty;
