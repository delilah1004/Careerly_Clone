import React, { useState, useEffect } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { View, Text, Grid, Col } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';

import Loading from '../Loading';

import VoteCard from '../../components/vote/VoteCard';
import MainCard from '../../components/main/MainCard';

import posts from '../../config/posts.json';
import { getPostList } from '../../config/PostAPI';

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function Main({ navigation }) {
  const [postList, setPostList] = useState(posts.result);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
    const unsubscrbie = navigation.addListener('focus', (e) => {
      console.log('메인페이지 접속중');
    });
    download();
    return unsubscrbie;
  }, [navigation]);

  const download = async () => {
    const result = await getPostList();

    setPostList(result);
    setReady(true);
  };

  return ready ? (
    <ScrollView style={styles.container}>
      {/* 투표 */}
      <ScrollView
        style={{ marginVertical: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.voteList}>
          <VoteCard navigation={navigation} vote={''} />
          <VoteCard navigation={navigation} vote={''} />
          <VoteCard navigation={navigation} vote={''} />
        </View>
      </ScrollView>

      {/* 글쓰기 */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PostCreate');
        }}
      >
        <Grid style={styles.createBox}>
          <Col size={2}>
            <FontAwesome
              style={{ alignSelf: 'center' }}
              name="user-circle-o"
              size={ThumbSize}
              color="#C7C7C7"
            />
          </Col>
          <Col size={8}>
            <Text style={styles.createText}>
              함께 나누고 싶은 생각이 있으신가요?
            </Text>
          </Col>
        </Grid>
      </TouchableOpacity>

      {/* 글 목록 */}
      {postList.map((post) => {
        return <MainCard navigation={navigation} post={post} />;
      })}
    </ScrollView>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    marginTop: getStatusBarHeight(),
  },
  voteList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
  },
  createBox: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    paddingVertical: 15,
    paddingLeft: 5,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    backgroundColor: '#F7F7F7',
    color: '#AAA',
    fontSize: 15,
    padding: 18,
    borderRadius: 5,
  },
});
