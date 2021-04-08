import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Dimensions,
} from 'react-native';
import { Container, Footer, Input, Text, Thumbnail, View } from 'native-base';

import Loading from '../Loading';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

import RNUrlPreview from 'react-native-url-preview';

import HeaderBack from '../../components/header/HeaderBack';
import CommentComponent from '../../components/CommentComponent';

import { readPost } from '../../config/PostAPI';
import { createComment } from '../../config/commentAPI';

const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function PostInfo({ navigation, route }) {
  const postId = route.params;

  const [ready, setReady] = useState(false);
  const [post, setPost] = useState('');

  // const [post, setPost] = useState('');
  const [currentComment, setCurrentComment] = useState('');

  useEffect(() => {
    setTimeout(() => {
      download();
    });
  }, []);

  const download = async () => {
    const postInfo = await readPost(postId);

    setPost(postInfo);

    setReady(true);
  };

  const commentUpload = async () => {
    if (comment == '') {
      Alert.alert('내용을 입력해주세요');
      return false;
    }

    let result = await createComment(post.id, content);
    if (result) {
      await Alert.alert('댓글 작성 완료!');
      setCurrentComment('');
    } else {
      Alert.alert('댓글 작성 실패');
    }
  };

  const share = () => {
    Share.share({
      message: `공유 \n\n 라일락 \n\n 코인`,
    });
  };

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );

    console.log(today.getTime(), ' - ', timeValue.getTime());
    console.log(betweenTime);

    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return ready ? (
    <Container style={styles.container}>
      <HeaderBack
        title={post.user.name + ' 님의 게시물'}
        navigation={navigation}
      />
      <ScrollView>
        <View style={styles.post}>
          {/* 글 작성자 정보 */}
          <View style={styles.itemHeader}>
            <View style={{ flexDirection: 'row' }}>
              {/* 글 작성자 이미지 */}
              <TouchableOpacity>
                <Thumbnail style={styles.thumbnail} source={im} />
              </TouchableOpacity>

              <View style={styles.infoBox}>
                <View style={styles.user}>
                  {/* 글 작성자 이름 */}
                  <Text style={styles.authorName}>{post.user.name}</Text>

                  <Text
                    style={{
                      color: '#C7C7C7',
                      fontSize: 13,
                      marginHorizontal: 10,
                    }}
                  >
                    |
                  </Text>

                  {/* 글 작성 시간 */}
                  <Text style={styles.time}>
                    {timeForToday(post.createdAt)}
                  </Text>
                </View>

                {/* 글 작성자 직함 */}
                <Text style={styles.authorRole}>{post.user.role}</Text>
              </View>
            </View>

            <View>
              {/* 팔로우 버튼 */}
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.text}>팔로우</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 글 */}
          <Text style={styles.content} numberOfLines={6} ellipsizeMode={'tail'}>
            {post.content}
          </Text>

          {/* 링크 연결 */}
          <RNUrlPreview text={post.url} />

          {/* 추천 현황 */}
          <View style={styles.recommend}>
            <Text style={styles.number}>{post.recommendedCnt}명</Text>
            <Text style={{ fontSize: 13 }}>이 추천했어요</Text>
          </View>

          {/* 각종 버튼 */}
          <View style={styles.buttonContainer}>
            {/* 추천해요 */}
            <TouchableOpacity style={styles.button}>
              <Octicons name="light-bulb" size={20} color="#A2D9D3" />
              <Text style={styles.buttonText}>추천해요</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              {/* 공유하기 */}
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  share();
                }}
              >
                <MaterialIcons name="share" size={20} color="#A2D9D3" />
                <Text style={styles.buttonText}>공유하기</Text>
                <Text style={styles.number}>{post.sharedCnt}</Text>
              </TouchableOpacity>

              {/* 댓글 */}
              <TouchableOpacity
                style={[styles.button, { marginStart: 10 }]}
                onPress={() => {
                  navigation.navigate('PostInfo', { post });
                }}
              >
                <MaterialCommunityIcons
                  name="comment-processing-outline"
                  size={20}
                  color="#A2D9D3"
                />
                <Text style={styles.buttonText}>댓글</Text>
                <Text style={styles.number}>{post.commentCnt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 댓글 목록 */}
        <View style={{ paddingBottom: 10 }}>
          {post.comment.map((comment, i) => {
            return (
              <CommentComponent
                navigation={navigation}
                comment={comment}
                key={i}
              />
            );
          })}
        </View>
      </ScrollView>

      {/* 댓글 작성란 */}
      <Footer style={styles.commentBox}>
        <Input
          style={styles.input}
          placeholder="게시물에 대해 이야기를 나눠보세요"
          placeholderTextColor="#999"
          value={currentComment}
          onChangeText={(text) => {
            setCurrentComment(text);
          }}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => commentUpload()}
        >
          <Text style={styles.addButtonText}>등록</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  post: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: ThumbSize,
    height: ThumbSize,
  },
  infoBox: {
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  authorRole: {
    color: '#999',
    fontSize: 14,
  },
  time: {
    color: '#AAA',
    fontSize: 13,
  },

  followButton: {
    backgroundColor: '#FFEDEE',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: '#EB6552',
  },

  content: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 27,
  },

  itemUrl: {},

  recommend: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 13,
    marginLeft: 5,
  },
  number: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 4,
  },

  commentBox: {
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 20,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#ed6653',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    color: 'white',
  },
});
