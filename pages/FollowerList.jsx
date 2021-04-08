import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import HeaderBack from '../components/header/HeaderBack';
import FollowerCard from '../components/FollowerCard';

import { getFollower } from '../config/FollowAPI';

export default function FollowerList({ navigation, route }) {
  const userId = route.params;

  // const [ready, setReady] = useState(false);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      download();
    });
  }, []);

  const download = async () => {
    const result = await getFollower(userId);

    console.log(result);

    setFollowerList(result);
  };

  return (
    <Container>
      <HeaderBack navigation={navigation} title={'팔로워'} />
      <Content style={{ marginTop: 30 }}>
        {followerList.map((follower, i) => {
          return (
            <FollowerCard navigation={navigation} follower={follower} key={i} />
          );
        })}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
