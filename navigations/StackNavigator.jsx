import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

// import Vote from '../pages/main/Vote';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name="Vote" component={Vote} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
