import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Header, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const WindowWidth = Dimensions.get('window').width;

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
    width: WindowWidth,
    borderBottomWidth: 1.8,
    borderBottomColor: '#D8D8D8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
