import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/begin/Start';
import SignIn from '../pages/begin/SignIn';
import SignUp from '../pages/begin/SignUp';
import TabNavigator from './TabNavigator';
import PostCreate from '../pages/main/PostCreate';
import PostInfo from '../pages/main/PostInfo';
import Notificate from '../pages/Notificate';
import SearchMember from '../pages/member/SearchMember';
import MemberList from '../pages/member/MemberList';
import MemberInfo from '../pages/member/MemberInfo';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="PostCreate" component={PostCreate} />
      <Stack.Screen name="PostInfo" component={PostInfo} />
      <Stack.Screen name="Notificate" component={Notificate} />
      <Stack.Screen name="SearchMember" component={SearchMember} />
      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="MemberInfo" component={MemberInfo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
