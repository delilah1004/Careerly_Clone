import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderBack({ navigation, title }) {
  return (
    <Header style={styles.header} transparent>
      <Button transparent onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" color="grey" size={26} />
      </Button>

      <Text>{title}</Text>

      <Button transparent>
        <Ionicons name="chevron-back" color="transparent" size={26} />
      </Button>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1.8,
    borderBottomColor: '#D8D8D8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
