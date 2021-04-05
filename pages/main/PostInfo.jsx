import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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
  Input,
  Item,
  List,
  ListItem,
} from 'native-base';
import HeaderBack from '../../components/header/HeaderBack';
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
import CommentCompont from '../../components/CommentCompont';
const containerheight = Dimensions.get('window').height / 0.5;
const share = () => {
  Share.share({
    message: `공유 \n\n 라일락 \n\n 코인`,
  });
};
export default function PostInfo({ navigation, route }) {
  return (
    <ScrollView>
      <HeaderBack title={`홍길동 님의 게시물`} navigation={navigation} />
      <Container style={{ backgroundColor: 'rgba(52, 52, 52, 0.1)' }}>
        <Card style={{ height: 750 }}>
          <CardItem style={{ borderRadius: 10 }} header>
            <Thumbnail small source={im} />
            <Text
              style={{
                marginLeft: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              홍길동
              <View style={{ marginLeft: 30, paddingRight: 20 }}>
                <Text
                  style={{ fontSize: 10, textAlign: 'center', marginLeft: 10 }}
                >
                  3시간 전
                </Text>
              </View>
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginTop: 10,
                marginLeft: 70,
                paddingTop: 35,
                fontSize: 15,
                color: 'gray',
              }}
            >
              벤처케피탈리스트
            </Text>

            <View style={styles.container}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>팔로우</Text>
              </TouchableOpacity>
            </View>
          </CardItem>
          <CardItem>
            <Text style={{ marginLeft: 10, marginTop: 5 }}>
              선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는
              태그를 꺼내 사용합니다. Stack.Navigator 태그 내부엔 페이지(화면)를
              스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다 컴포넌트들을 이
              담겨 있습니다 선언한 const Stack = createStackNavigator(); Stack
              변수에 들어있는 태그를 꺼내 화면)를 스타일링 할 수 있는 다양한
              옵션들이 담겨 있습니다 컴포넌트들을 페이지처럼 여기게끔 해주는
              기능을 하는 네비게이터 선언한 const Stack = cr 선언한 const Stack
              = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내
              사용합니다. Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할
              수 있는 다양한 옵션들이 담겨 있습니다 컴포넌트들을 이 담겨
              있습니다 선언한 const Stack = createStackNavigator(); Stack 변수에
              들어있는 태그를 꺼내 화면)를 스타일링 할 수 있는 다양한 옵션들이
              담겨 있습니다 컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는
              네비게이터 선언한 const Stack = cr 는 다양한 옵션들이 담겨
              있습니다 컴포넌트들을 이 담겨 있습니다 선언한 const Stack =
              createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 화면)를
              스타일링 네비게이터 선언한 const Stack = cr 는 다양한 옵션들이
              담겨 있습니다 컴포넌트들을 이 담겨 있습니다 선언한 const Stack =
              createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 화면)
            </Text>
          </CardItem>
          <CardItem>
            <RNUrlPreview text={'https://www.youtube.com/'} />
          </CardItem>
          <CardItem footer>
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
            <TouchableOpacity style={{ flexDirection: 'row' }}>
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
      </Container>
      <Item>
        <Input placeholder="게시물에 대해 이야기를 나눠보세요" />
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>등록</Text>
        </TouchableOpacity>
      </Item>
      <List>
        <CommentCompont />
        <CommentCompont />
        <CommentCompont />
      </List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button1: {
    width: 65,
    height: 30,
    marginEnd: 15,
    marginLeft: 135,
    backgroundColor: '#FAE0E8',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: 65,
    height: 30,
    marginEnd: 15,
    marginLeft: 80,
    backgroundColor: '#ed6653',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText1: {
    fontSize: 12,
    color: '#ed6653',
  },
  buttonText2: {
    fontSize: 12,
    color: 'white',
  },
});
