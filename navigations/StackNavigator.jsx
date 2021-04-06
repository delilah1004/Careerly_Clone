import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/begin/Start';
import SignIn from '../pages/begin/SignIn';
import SignUp from '../pages/begin/SignUp';
import RolePick from '../pages/begin/RolePick';
import TabNavigator from './TabNavigator';
import PostCreate from '../pages/main/PostCreate';
import PostInfo from '../pages/main/PostInfo';
import Notificate from '../pages/Notificate';
import SearchMember from '../pages/member/SearchMember';
import MemberList from '../pages/member/MemberList';
import MemberInfo from '../pages/member/MemberInfo';
import Setting from '../pages/set/Setting';
import Alert from '../pages/set/Alert';
import ServiceCenter from '../pages/set/ServiceCenter';
import UserUpdate from '../pages/set/UserUpdate';
import PasswordChange from '../pages/set/PasswordChange';

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
      <Stack.Screen name="RolePick" component={RolePick} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="PostCreate" component={PostCreate} />
      <Stack.Screen name="PostInfo" component={PostInfo} />
      <Stack.Screen name="Notificate" component={Notificate} />
      <Stack.Screen name="SearchMember" component={SearchMember} />
      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="MemberInfo" component={MemberInfo} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Alert" component={Alert} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen name="UserUpdate" component={UserUpdate} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
