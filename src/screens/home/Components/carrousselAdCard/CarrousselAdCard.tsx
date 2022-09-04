import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  image?: string;
  text?: string;
}

export const CarrousselAdCard = ({image, text}: IProps) => {
  return (
    <View
      style={{
        marginTop: 3,
        width: 260,
        borderWidth: 2,
        borderColor: '#C0CFDA',
      }}>
      <View style={{width: '100%', height: 125}}>
        <Image
          source={{
            uri:
              image ||
              'https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
          }}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View>
        <Pressable
          onPress={() => console.log('Navigate AD')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                paddingTop: 5,
                marginLeft: 5,
                fontSize: 16,
                fontWeight: '700',
                color: '#2B3E4B',
              }}>
              {text || 'Texto del anuncio'}
            </Text>
            <Text
              style={{
                paddingBottom: 5,
                marginLeft: 5,
                fontSize: 14,
                fontWeight: '500',
                color: '#2B3E4B',
              }}>
              {'Descripcion del anuncio'}
            </Text>
          </View>
          <Icon name={'keyboard-arrow-right'} size={26} color={'#2B3E4B'} />
        </Pressable>
      </View>
    </View>
  );
};
