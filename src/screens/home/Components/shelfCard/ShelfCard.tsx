import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  image: string;
  actualPrice: number;
  description: string;
  lastPrice?: number;
}

export const ShelfCard = ({
  image,
  actualPrice,
  description,
  lastPrice,
}: IProps) => {
  return (
    <View
      style={{
        width: 120,
        backgroundColor: '#FFFFFF',
        paddingTop: 4,
        borderWidth: 1,
        borderColor: '#C0CFDA',
      }}>
      <View style={{width: 105, height: 105, alignSelf: 'center'}}>
        <Image
          source={{uri: image}}
          resizeMode={'contain'}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 4, marginLeft: 6, fontWeight: '700'}}>
          {'$' + actualPrice.toFixed(2)}
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
          }}>
          {lastPrice && '$' + lastPrice!?.toFixed(2)}
        </Text>
      </View>
      {lastPrice && (
        <View style={{flexDirection: 'row', marginLeft: 5}}>
          <Icon name="brightness-percent" size={16} color={'#28BEAF'} />
          <Text style={{color: '#28BEAF', fontWeight: '600', fontSize: 11}}>
            -35%
          </Text>
        </View>
      )}
      <View style={{marginLeft: 5, width: '96%'}}>
        <Text style={{fontSize: 12, fontWeight: '600'}}>{description}</Text>
      </View>
      {!lastPrice && (
        <View style={{marginLeft: 5, width: '96%'}}>
          <Text style={{fontSize: 12, fontWeight: '600'}}>Una linea mas</Text>
        </View>
      )}
      <View
        style={{
          backgroundColor: '#007A67',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Pressable onPress={() => console.log('agregar')}>
          <Text style={{color: 'white'}}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};
