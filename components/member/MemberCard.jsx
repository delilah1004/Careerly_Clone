import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

const im = require('../../assets/icon.png');

const ViewWidth = Dimensions.get('window').width;
const CardWidth = ViewWidth * 0.5;

export default function MemberCard({ navigation, member }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Thumbnail small source={im} style={styles.cardImage} />
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.role} numberOfLines={1}>
          {member.role}
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
    width: ViewWidth / 2,
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
    width: CardWidth * 0.65,
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
});
