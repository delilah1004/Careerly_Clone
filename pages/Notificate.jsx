import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container } from 'native-base';
import HeaderTitle from '../components/header/HeaderTitle';

export default function Notification() {
  return (
    <Container>
      <HeaderTitle title={'알림'} />
      <View style={styles.container}>
        <Text>careerly notification!</Text>
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
});
