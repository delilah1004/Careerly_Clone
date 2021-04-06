import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import HeaderBack from '../components/header/HeaderBack';

import FollowerCard from '../components/FollowerCard';

export default function FollowerList({ navigation }) {
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'팔로워'} />
      <Content style={{ marginTop: 30 }}>
        <FollowerCard navigation={navigation} />
        <FollowerCard navigation={navigation} />
        <FollowerCard navigation={navigation} />
        <FollowerCard navigation={navigation} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
