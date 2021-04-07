import React from 'react';
import { StyleSheet, TouchableOpacity, Share, Dimensions } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

import RNUrlPreview from 'react-native-url-preview';

const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

const currentDate = new Date();

export default function MainCard({ navigation, post }) {
  const share = () => {
    Share.share({
      message: `공유 \n\n 라일락 \n\n 코인`,
    });
  };

  // console.log(post);

  const read = () => {
    // navigation.push('PostInfo');
    navigation.push('PostInfo', { post });
  };

  // 날짜 계산하기!
  // 월이 다르면 N달전
  // 일이 다르면 N일전
  // 시간이 다르면 N시간전
  // 분이 다르면 N분전
  // 초가 다르면 N초전
  // console.log(currentDate);
  // console.log(post.createdAt);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
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

  return (
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

            {/* 글 작성자 직함 */}
            <Text style={styles.authorRole}>{post.user.role}</Text>
          </View>

          {/* 글 작성 시간 */}
          <Text style={styles.time}>{timeForToday(post.createdAt)}</Text>
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
            onPress={read}
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
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  itemHeader: {
    flexDirection: 'row',
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
});
