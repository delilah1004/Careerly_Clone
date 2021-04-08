import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/begin/Start';
import SignIn from '../pages/begin/SignIn';
import SignUp from '../pages/begin/SignUp';
import PasswordFind from '../pages/begin/PasswordFind';
import RolePick from '../pages/begin/RolePick';
import TabNavigator from './TabNavigator';
import PostCreate from '../pages/main/PostCreate';
import PostInfo from '../pages/main/PostInfo';
import RecommenderList from '../pages/main/RecommenderList';
import Notificate from '../pages/Notificate';
import SearchMember from '../pages/member/SearchMember';
import MemberList from '../pages/member/MemberList';
import MemberInfo from '../pages/member/MemberInfo';
import Setting from '../pages/set/Setting';
import Alert from '../pages/set/Alert';
import ServiceCenter from '../pages/set/ServiceCenter';
import UserUpdate from '../pages/set/UserUpdate';
import PasswordChange from '../pages/set/PasswordChange';
import ProfileUpdate from '../pages/mypage/ProfileUpdate';
import FollowerList from '../pages/FollowerList';
import FollowingList from '../pages/FollowingList';
import VoteCreate from '../pages/main/VoteCreate';
import Vote from '../pages/main/Vote';
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
      <Stack.Screen name="Notificate" component={Notificate} />
      <Stack.Screen name="SearchMember" component={SearchMember} />
      <Stack.Screen name="MemberList" component={MemberList} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Alert" component={Alert} />
      <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
      <Stack.Screen name="UserUpdate" component={UserUpdate} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Stack.Screen name="FollowerList" component={FollowerList} />
      <Stack.Screen name="FollowingList" component={FollowingList} />
      <Stack.Screen name="VoteCreate" component={VoteCreate} />
      <Stack.Screen name="MemberInfo" component={MemberInfo} />
      <Stack.Screen name="Vote" component={Vote} />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
