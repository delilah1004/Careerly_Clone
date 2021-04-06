import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

const im = require('../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;
const CardWidth = WindowWidth * 0.5;

export default function MyCard({ navigation }) {
  return (
    <View style={styles.cardContainer}>
      <Thumbnail small source={im} />

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
          경력 또는 학력 추가
        </Text>
        <Text
          style={{ fontSize: 14, textAlign: 'center', marginVertical: 15 }}
          numberOfLines={2}
        >
          내 커리어를 등록하고 채용, 네트워크 기회를 만드세요
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>경력 및 학력 작성</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    width: CardWidth,
    padding: 15,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {},
  button: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#FFEDEE',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    color: '#CF7568',
  },
});
