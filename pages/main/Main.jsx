import React, { useState, useEffect } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { View, Text, Grid, Col, Content } from 'native-base';

import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import { FontAwesome } from '@expo/vector-icons';

import Loading from '../Loading';

import VoteCard from '../../components/vote/VoteCard';
import MainCard from '../../components/main/PostCard';

import posts from '../../config/mock/posts.json';

import { getPostList, getNextData } from '../../config/PostAPI';
import { getVoteList } from '../../config/VoteAPI';
import { getUserInfo } from '../../config/UserAPI';

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function Main({ navigation }) {
  const [ready, setReady] = useState(false);
  const [postList, setPostList] = useState(posts.result);
  const [voteList, setVoteList] = useState('');
  const [user, serUser] = useState('');
  const [pageNum, setPageNum] = useState(0);

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
    const votes = await getVoteList();
    setVoteList(votes);
    const userInfo = await getUserInfo();
    serUser(userInfo);
    setReady(true);
  };

  return ready ? (
    <View style={styles.container}>
      {postList.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <OptimizedFlatList
          data={postList}
          ListHeaderComponent={() => {
            return (
              <Content>
                {/* 투표 */}
                <ScrollView
                  style={{ marginVertical: 20 }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.voteList}>
                    {voteList.map((vote, i) => {
                      return (
                        <VoteCard navigation={navigation} vote={vote} key={i} />
                      );
                    })}
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
              </Content>
            );
          }}
          onEndReachedThreshold={0.1}
          onEndReached={async () => {
            console.log('바닥 가까이 감: 리프레시');
            let nextData = await getNextData(pageNum, setPageNum);
            if (nextData == 0) {
              Alert.alert('더이상 글이 없어요!');
            } else {
              let newData = [...postList, ...nextData];
              await setPostList(newData);
            }
          }}
          renderItem={(post, i) => {
            // console.log(data);
            return (
              <MainCard
                navigation={navigation}
                post={post.item}
                userId={user._id}
                loc={'main'}
                key={i}
              />
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
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
