import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderBack({ navigation, title }) {
  return (
    <Header style={styles.header} transparent>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="grey" size={26} />
        </Button>
      </Left>
      <Body>
        <Text>{title}</Text>
      </Body>
      <Right>
        <Button transparent>
          <Ionicons name="chevron-back" color="transparent" size={26} />
        </Button>
      </Right>
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
