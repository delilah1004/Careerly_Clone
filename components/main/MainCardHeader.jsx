import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function MainCardHeader({ navigation, post }) {
  const timeForToday = (value) => {
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
  };

  return (
    // {/* 글 작성자 정보 */}
    <View style={styles.itemHeader}>
      {/* 글 작성자 이미지 */}
      <TouchableOpacity
        onPress={() => {
          navigation.push('MemberInfo', post.user._id);
        }}
      >
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
  );
}

const styles = StyleSheet.create({
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
    fontSize: 14,
    marginStart: 10,
  },
  time: {
    color: '#AAA',
    fontSize: 13,
  },
});
