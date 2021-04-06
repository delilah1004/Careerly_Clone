import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import HeaderBack from '../components/header/HeaderBack';

import FollowingCard from '../components/FollowingCard';

export default function FollowingList({ navigation }) {
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'팔로잉'} />
      <Content style={{ marginTop: 30 }}>
        <FollowingCard navigation={navigation} />
        <FollowingCard navigation={navigation} />
        <FollowingCard navigation={navigation} />
        <FollowingCard navigation={navigation} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
