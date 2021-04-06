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

const im = require('../assets/icon.png');

export default function FollowingCard({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MemberInfo');
      }}
    >
      <Grid>
        <Col
          size={4}
          style={{
            height: 50,
            marginBottom: 30,
            flexDirection: 'row',
          }}
        >
          <Thumbnail
            small
            source={im}
            style={{ marginTop: 10, marginLeft: 10 }}
          />
          <Text
            style={{
              marginLeft: 15,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            홍길동
          </Text>
          <Text
            style={{
              position: 'absolute',
              marginLeft: 60,
              paddingTop: 30,
              fontSize: 15,
              color: 'gray',
            }}
          >
            벤처케피탈리스트
          </Text>
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}
