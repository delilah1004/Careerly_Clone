import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';

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
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
const im = require('../../assets/icon.png');
const share = () => {
  Share.share({
    message: `공유 \n\n 라일락 \n\n 코인`,
  });
};

export default function MainCard({ navigation }) {
  return (
    <Card style={{ height: 350, borderRadius: 10 }}>
      <CardItem style={{ borderRadius: 10 }} header>
        <Thumbnail small source={im} />
        <Text
          style={{
            marginLeft: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          홍길동
          <Text style={{ fontWeight: 'normal' }}> 벤처케피탈리스트</Text>
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginLeft: 120,
            paddingTop: 35,
            fontSize: 10,
            color: 'gray',
          }}
        >
          1시간전
        </Text>
      </CardItem>
      <Text style={{ marginLeft: 10 }} numberOfLines={5}>
        컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를
        선언합니다. 위에서 선언한 const Stack = createStackNavigator(); Stack
        변수에 들어있는 태그를 꺼내 사용합니다. Stack.Navigator 태그 내부엔
        페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다
      </Text>
      <CardItem footer>
        <RNUrlPreview text={'https://www.youtube.com/'} />
      </CardItem>
      <CardItem>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Octicons
            name="light-bulb"
            style={{
              alignSelf: 'center',
            }}
            size={15}
            color="#8BFAF5"
          />
          <Text style={{ marginLeft: 3, fontSize: 12 }}>추천해요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            share();
          }}
        >
          <MaterialIcons
            style={{
              marginLeft: 200,
              marginRight: 10,
              alignSelf: 'center',
            }}
            name="share"
            size={15}
            color="#8BFAF5"
          />
          <Text
            style={{
              fontSize: 12,
              borderRightWidth: 1,
              paddingRight: 10,
              borderRightColor: 'gray',
            }}
          >
            공유하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('PostInfo');
          }}
        >
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={15}
            style={{
              marginLeft: 10,
              marginRight: 5,
              alignSelf: 'center',
            }}
            color="#8BFAF5"
          />
          <Text
            style={{
              fontSize: 12,
            }}
          >
            댓글
          </Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
}
