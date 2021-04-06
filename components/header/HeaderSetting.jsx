import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Right, Button } from 'native-base';
import { EvilIcons, AntDesign } from '@expo/vector-icons';

export default function HeaderSetting({ navigation }) {
  return (
    <Header style={styles.header} transparent>
      <Body></Body>
      <Right>
        <Button transparent>
          <EvilIcons name="share-google" size={30} color="black" />
        </Button>
        <Button transparent onPress={() => navigation.push('Setting')}>
          <AntDesign name="setting" size={24} color="black" />
        </Button>
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
