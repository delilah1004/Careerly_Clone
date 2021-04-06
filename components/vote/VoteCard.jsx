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
} from 'native-base';

import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
} from '@expo/vector-icons';
const im = require('../../assets/icon.png');

export default function VoteCard({ navigation }) {
  return (
    <TouchableOpacity>
      <Card style={{ width: 280, height: 200, borderRadius: 10, elevation: 3 }}>
        <CardItem header>
          <Text
            style={{
              borderRadius: 5,
              padding: 5,
              textAlign: 'center',
              color: 'blue',
              backgroundColor: '#D1ECFF',
            }}
          >
            투표
          </Text>
          <Text style={{ marginLeft: 150, fontSize: 14, color: 'gray' }}>
            ~4월 7일까지
          </Text>
        </CardItem>
        <Text style={{ marginLeft: 20 }}>세상에 좋은 팀장이 있다? 없다?</Text>
        <CardItem footer>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <Thumbnail small source={im} />
            <Text style={{ alignSelf: 'center', marginLeft: 10 }}>홍길동</Text>
            <Text
              style={{
                alignSelf: 'center',
                position: 'absolute',
                marginLeft: 50,
                fontSize: 15,
                paddingTop: 50,
              }}
            >
              HR
            </Text>
          </View>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}
