import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Thumbnail, View } from 'native-base';

const im = require('../../assets/icon.png');

const ViewWidth = Dimensions.get('window').width;
const CardWidth = ViewWidth * 0.5;

export default function MemberCard({ navigation, member, userId }) {
  // console.log(member);

  const [state, setState] = useState(false);

  // useEffect(() => {
  //   if (content.like == true) {
  //     setLike(true);
  //   } else {
  //     setLike(false);
  //   }
  // }, []);

  const follow = async () => {
    const result = await getFollower(userId);

    setFollowerList(result);
  };

  const unFollow = async () => {
    const result = await getFollower(userId);

    setFollowerList(result);
  };

  const showButton = () => {
    if (userId != member._id) {
      return (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>팔로우</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity disabled style={styles.disable}>
          <Text style={{ color: '#FFF' }}>팔로우</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.push('MemberInfo', member._id);
      }}
    >
      <View style={styles.card}>
        <Thumbnail small source={im} style={styles.cardImage} />
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.role} numberOfLines={1}>
          {member.role}
        </Text>
        {showButton()}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: (ViewWidth * 0.95) / 2,
    padding: 7,
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
  disable: {
    width: CardWidth * 0.65,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
