import React from 'react';

import Platform from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
} from '@expo/vector-icons';

import { Main } from '../pages/main';
import { SearchMember } from '../pages/member';
import Notificate from '../pages/Notificate';
import MyPage from '../pages/mypage/Mypage';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          let iconKind = '';

          if (route.name === 'Main') {
            iconKind = 'Foundation';
            iconName = 'home';
          } else if (route.name === 'SearchMember') {
            iconKind = 'Ionicons';
            iconName += 'search-sharp';
          } else if (route.name === 'Notificate') {
            iconKind = 'Fontisto';
            iconName = 'bell';
          } else if (route.name === 'MyPage') {
            iconKind = 'FontAwesome';
            iconName = 'user-circle-o';
          }

          if (iconKind === 'Foundation') {
            return (
              <Foundation
                name={iconName}
                color={focused ? '#ED6653' : '#777'}
                size={24}
              />
            );
          } else if (iconKind === 'Ionicons') {
            return (
              <Ionicons
                name={iconName}
                color={focused ? 'tomato' : 'grey'}
                size={24}
              />
            );
          } else if (iconKind === 'Fontisto') {
            return (
              <Fontisto
                name={iconName}
                color={focused ? 'tomato' : 'grey'}
                size={24}
              />
            );
          } else if (iconKind === 'FontAwesome') {
            return (
              <FontAwesome
                name={iconName}
                color={focused ? 'tomato' : 'grey'}
                size={24}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 50,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen name="Main" component={Main} />
      <Tabs.Screen name="SearchMember" component={SearchMember} />
      <Tabs.Screen name="Notificate" component={Notificate} />
      <Tabs.Screen name="MyPage" component={MyPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
