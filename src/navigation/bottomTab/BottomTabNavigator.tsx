import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import CategoryEmpty from '../../screens/extra/CategoryEmpty';
import PromosEmpty from '../../screens/extra/PromosEmpty';
import MyAccountEmpty from '../../screens/extra/MyAccountEmpty';
const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName="Inicio"
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: '#FAFAFA',
          borderTopWidth: 2,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          marginBottom: 2,
          fontSize: 12,
        },
        tabBarActiveTintColor: '#007A67',
        tabBarInactiveTintColor: '#4C6070',
      })}>
      <Screen
        name="inicio"
        component={Home}
        options={{
          title: 'Inicio',
          header: () => undefined,
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home"
                size={25}
                color={focused ? '#007A67' : '#4C6070'}
              />
            );
          },
        }}
      />
      <Screen
        name="categorias"
        component={CategoryEmpty}
        options={{
          title: 'Categorias',
          header: () => undefined,
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name="category"
                size={25}
                color={focused ? '#007A67' : '#4C6070'}
              />
            );
          },
        }}
      />
      <Screen
        name="promos"
        component={PromosEmpty}
        options={{
          title: 'Promos',
          header: () => undefined,
          tabBarIcon: ({focused}) => {
            return (
              <Icon3
                name="brightness-percent"
                size={25}
                color={focused ? '#007A67' : '#4C6070'}
              />
            );
          },
        }}
      />
      <Screen
        name="cuenta"
        component={MyAccountEmpty}
        options={{
          title: 'Cuenta',
          header: () => undefined,
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name="account-circle"
                size={25}
                color={focused ? '#007A67' : '#4C6070'}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};
export default BottomTabNavigator;
