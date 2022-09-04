import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchBar = () => {
  return (
    <View
      style={{
        width: '94%',
        height: 38,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#A1AEB9',
      }}>
      <Icon
        name={'search'}
        size={20}
        color={'#A1AEB9'}
        style={{marginLeft: 5}}
      />
      <TextInput
        multiline={false}
        style={{fontSize: 13, width: '90%'}}
        placeholder={'Busca en 7-Brand'}
      />
    </View>
  );
};
