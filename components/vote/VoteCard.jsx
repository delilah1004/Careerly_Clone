import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Thumbnail } from 'native-base';

const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const CardWidth = WindowWidth * 0.86;
const ThumbSize = WindowWidth * 0.12;

export default function VoteCard({ navigation, vote }) {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Header */}
      <View style={styles.itemHeader}>
        {/* 투표 표시 */}
        <Text style={styles.badge}>투표</Text>

        {/* 날짜 */}
        <Text style={styles.deadLine}>~4월 7일까지</Text>
      </View>

      {/* Body */}
      <View style={styles.itemBody}>
        {/* 투표 제목 */}
        <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.voteTitle}>
          {vote.title}
        </Text>
      </View>

      {/* Footer */}
      {/* 투표 작성자 정보 */}
      <View style={styles.itemFooter}>
        {/* 투표 작성자 이미지 */}
        <Thumbnail style={styles.thumbnail} source={im} />

        <View style={styles.infoBox}>
          {/* 투표 작성자 이름 */}
          <Text style={styles.authorName}>{vote.name}</Text>

          {/* 투표 작성자 직함 */}
          <Text style={styles.authorRole}>{vote.role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    width: CardWidth,
    padding: 20,
    marginRight: 15,
    borderRadius: 10,
  },

  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#E6F2FD',
    color: '#3797E8',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    textAlign: 'center',
  },
  deadLine: {
    color: '#AAA',
    fontSize: 13,
  },

  itemBody: {
    height: CardWidth * 0.2,
    marginVertical: 10,
  },
  voteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  itemFooter: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: ThumbSize,
    height: ThumbSize,
  },
  infoBox: {
    marginLeft: 10,
  },
  authorName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  authorRole: {
    color: '#999',
    fontSize: 15,
  },
});
