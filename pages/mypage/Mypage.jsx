import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Mypage() {
  return (
    <View style={styles.container}>
      <Text>careerly mypage!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
