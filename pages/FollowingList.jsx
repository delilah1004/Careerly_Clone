import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import HeaderBack from '../components/header/HeaderBack';
import FollowingCard from '../components/FollowingCard';

import { getFollowing } from '../config/FollowAPI';

export default function FollowingList({ navigation, route }) {
  const userId = route.params;

  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      download();
    });
  }, []);

  const download = async () => {
    const result = await getFollowing(userId);

    setFollowingList(result);
  };
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'팔로잉'} />
      <Content style={{ marginTop: 30 }}>
        {followingList.map((following, i) => {
          return (
            <FollowingCard
              navigation={navigation}
              following={following}
              key={i}
            />
          );
        })}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
