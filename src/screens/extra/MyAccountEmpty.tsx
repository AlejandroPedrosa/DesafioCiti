import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {actionSignOut} from '../../services/auth';

const MyAccountEmpty = () => {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DDE6EE',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 24}}>Estas en mi cuenta</Text>
      <Pressable
        onPress={() => dispatch(actionSignOut())}
        style={{
          paddingVertical: 8,
          width: '90%',
          backgroundColor: 'red',
          borderRadius: 6,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: '700', color: '#FAFAFA'}}>
          Cerrar sesion
        </Text>
      </Pressable>
    </View>
  );
};

export default MyAccountEmpty;
