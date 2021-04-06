import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Text, Button } from 'native-base';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

export default function HeaderShare({ navigation }) {
  return (
    <Header style={styles.header} transparent>
      <Body></Body>
      <Right>
        <Button transparent>
          <EvilIcons name="share-google" size={30} color="black" />
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
