import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/begin/Start';
import SignUp from '../pages/begin/SignUp';
import SignIn from '../pages/begin/SignIn';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
