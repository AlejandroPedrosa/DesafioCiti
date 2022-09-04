import React from 'react';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackNavigator} from './src/navigation/Navigation';
import Login from './src/screens/authentication/login/Login';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
          <StackNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
