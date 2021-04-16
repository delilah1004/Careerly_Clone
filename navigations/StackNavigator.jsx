import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Start, SignIn, SignUp, PasswordFind, RolePick } from '../pages/begin';

import TabNavigator from './TabNavigator';

import {
  PostCreate,
  PostInfo,
  RecommenderList,
  Vote,
  VoteCreate,
} from '../pages/main';

import { MemberInfo, MemberList } from '../pages/member';

import {
  Alert,
  PasswordChange,
  ServiceCenter,
  Setting,
  UserUpdate,
} from '../pages/set';

import ProfileUpdate from '../pages/mypage/ProfileUpdate';

import FollowerList from '../pages/FollowerList';
import FollowingList from '../pages/FollowingList';
import Loading from '../pages/Loading';

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
      <Stack.Screen name="PasswordFind" component={PasswordFind} />
      <Stack.Screen name="RolePick" component={RolePick} />

      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="PostCreate" component={PostCreate} />
      <Stack.Screen name="PostInfo" component={PostInfo} />
      <Stack.Screen name="RecommenderList" component={RecommenderList} />

      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="MemberInfo" component={MemberInfo} />

      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Alert" component={Alert} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen name="UserUpdate" component={UserUpdate} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="FollowerList" component={FollowerList} />
      <Stack.Screen name="FollowingList" component={FollowingList} />
      <Stack.Screen name="VoteCreate" component={VoteCreate} />
      <Stack.Screen name="Vote" component={Vote} />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
