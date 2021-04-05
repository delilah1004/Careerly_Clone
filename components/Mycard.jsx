import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import RNUrlPreview from 'react-native-url-preview';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Tab,
  Tabs,
} from 'native-base';

import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
} from '@expo/vector-icons';
const im = require('../assets/icon.png');

export default function MyCard({ navigation }) {
  return (
    <TouchableOpacity>
      <Card style={{ width: 210, height: 200, borderRadius: 10, elevation: 3 }}>
        <CardItem style={{ marginLeft: 65 }} header>
          <Thumbnail small source={im} />
        </CardItem>

        <CardItem>
          <Text style={{ alignSelf: 'center', marginLeft: 10 }}>
            내 커리어를 등록하고 채용, 네트워크 기회를 만드세요
          </Text>
        </CardItem>
        <CardItem footer>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>추가하기</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    marginEnd: 15,
    backgroundColor: '#FFEDEE',
    borderRadius: 5,
    marginLeft: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#CF7568',
  },
});
