import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

const im = require('../../assets/icon.png');

const ViewWidth = Dimensions.get('window').width;
const CardWidth = ViewWidth * 0.5;

export default function MemberCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* <Image style={styles.cardImage} source={im} /> */}
        <Thumbnail small source={im} style={styles.cardImage} />
        <Text style={styles.name}>오수희</Text>
        <Text elliipsizeMode="tail" style={styles.role}>
          콘텐츠 전략가 라
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>팔로우</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    padding: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: CardWidth * 0.5,
    height: CardWidth * 0.5,
    borderRadius: 50,
  },
  name: {
    marginVertical: 10,
    fontWeight: '700',
  },
  role: {
    marginBottom: 10,
  },
  button: {
    width: CardWidth * 0.7,
    padding: 5,
    backgroundColor: '#ed6653',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
