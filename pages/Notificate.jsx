import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Container } from 'native-base';

import HeaderTitle from '../components/header/HeaderTitle';

import bell from '../assets/bell.jpg';

const windowWidth = Dimensions.get('window').width;

export default function Notification() {
  return (
    <Container>
      <HeaderTitle title={'알림'} />
      <View style={styles.container}>
        <Image style={styles.bell} source={bell} />
        <Text style={styles.text}>아직 받아볼 알림이 없어요.</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell: {
    width: windowWidth / 3,
    height: windowWidth / 3,
  },
  text: {
    fontSize: 16,
    color: '#777',
  },
});
