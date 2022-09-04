import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../bottomTab/BottomTabNavigator';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="home"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
