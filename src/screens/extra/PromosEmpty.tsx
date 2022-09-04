import React from 'react';
import {View, Text} from 'react-native';

const PromosEmpty = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DDE6EE',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 24}}>Estas en promos</Text>
    </View>
  );
};

export default PromosEmpty;
