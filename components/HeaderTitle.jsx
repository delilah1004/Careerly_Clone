import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text } from 'native-base';

export default function HeaderTitle({ title }) {
  return (
    <Header style={styles.header} transparent>
      <Text>{title}</Text>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
