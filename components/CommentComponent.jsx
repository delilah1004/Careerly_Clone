import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Thumbnail, View } from 'native-base';

const my = require('../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function CommentComponent({ navigation, comment }) {
  function dateFormat(d) {
    let date = new Date(d);
    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let hour = date.getHours();
    if (hour < 10) hour = '0' + hour;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        {/* 댓글 작성자 이미지 */}
        <TouchableOpacity>
          <Thumbnail style={styles.thumbnail} source={my} />
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <View style={styles.user}>
            {/* 댓글 작성자 이름 */}
            <Text style={styles.authorName}>{comment.user.name}</Text>
          </View>

          {/* 댓글 작성자 직함 */}
          <Text style={styles.authorRole}>{comment.user.role}</Text>
        </View>
      </View>

      {/* 댓글 내용 */}
      <Text style={styles.comment} note numberOfLines={3}>
        {comment.content}
      </Text>

      {/* 답글 달기 버튼 */}
      <TouchableOpacity>
        <Text style={styles.addComment}>답글 달기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontSize: 14,
  },
  comment: {
    marginVertical: 10,
  },
  addComment: {
    marginVertical: 5,
    color: '#777',
    fontWeight: '500',
  },
});
