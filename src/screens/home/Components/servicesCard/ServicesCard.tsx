import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  image?: string;
  iconName?: string;
  text: string;
}

export const ServicesCard = ({image, iconName, text}: IProps) => {
  return (
    <View
      style={{
        width: 90,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        height: 85,
      }}>
      <Pressable
        onPress={() => console.log('service navigate')}
        style={{alignItems: 'center'}}>
        {image && (
          <View style={{width: 34, height: 34}}>
            <Image
              style={{width: '100%', height: '100%'}}
              resizeMode={'contain'}
              source={{
                uri: image,
              }}
            />
          </View>
        )}
        {iconName && (
          <View>
            {iconName === 'brightness-percent' ||
            iconName === 'qrcode' ||
            iconName === 'notebook-edit' ||
            iconName === 'store-marker' ? (
              <Icon2 name={iconName} size={32} color={'#526576'} />
            ) : (
              <Icon name={iconName} size={32} color={'#526576'} />
            )}
          </View>
        )}
        <View style={{paddingTop: 5}}>
          <Text style={{fontWeight: '600', fontSize: 14}}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};
