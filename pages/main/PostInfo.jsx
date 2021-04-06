import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Share,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Container,
  Input,
  Item,
  List,
  Text,
  Thumbnail,
  View,
} from 'native-base';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

import RNUrlPreview from 'react-native-url-preview';
import HeaderBack from '../../components/header/HeaderBack';
import CommentComponent from '../../components/CommentComponent';

const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function PostInfo({ navigation, route }) {
  const share = () => {
    Share.share({
      message: `공유 \n\n 라일락 \n\n 코인`,
    });
  };

  const post = route.params.post;

  return (
    <Container style={styles.container}>
      <HeaderBack title={`홍길동 님의 게시물`} navigation={navigation} />
      <ScrollView>
        <View style={styles.post}>
          {/* 글 작성자 정보 */}
          <View style={styles.itemHeader}>
            {/* 글 작성자 이미지 */}
            <TouchableOpacity>
              <Thumbnail style={styles.thumbnail} source={im} />
            </TouchableOpacity>

            <View style={styles.infoBox}>
              <View style={styles.user}>
                {/* 글 작성자 이름 */}
                <Text style={styles.authorName}>{post.user.name}</Text>

                {/* 글 작성 시간 */}
                <Text style={styles.time}>1시간전</Text>
              </View>

              {/* 글 작성자 직함 */}
              <Text style={styles.authorRole}>{post.user.role}</Text>
            </View>

            {/* 팔로우 버튼 */}
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.text}>팔로우</Text>
            </TouchableOpacity>
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
        <Item style={{ backgroundColor: 'white' }}>
          <Input placeholder="게시물에 대해 이야기를 나눠보세요" />
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>등록</Text>
          </TouchableOpacity>
        </Item>
        <List style={{ backgroundColor: 'white' }}>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </List>
      </ScrollView>
    </Container>
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
    marginVertical: 7,
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
  },
  authorName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  authorRole: {
    color: '#999',
    fontSize: 15,
  },
  time: {
    color: '#AAA',
    fontSize: 13,
  },

  followButton: {
    padding: 5,
    backgroundColor: '#FFEDEE',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
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

  button2: {
    width: 65,
    height: 30,
    marginEnd: 15,
    marginLeft: 80,
    backgroundColor: '#ed6653',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2: {
    fontSize: 12,
    color: 'white',
  },
});
