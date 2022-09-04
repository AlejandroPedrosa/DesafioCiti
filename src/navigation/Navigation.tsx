import React from 'react';
// import { useAppSelector } from '../redux/hooks';
import AuthNavigator from './stacks/AuthNavigator';
import HomeNavigator from './stacks/HomeNavigator';
import authSlice from '../redux/slices/auth.slice';
import {useAppSelector} from '../redux/hooks';

export const StackNavigator = () => {
  const {isLoggedIn} = useAppSelector(state => state.authSlice);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  } else {
    return <HomeNavigator />;
  }
};
