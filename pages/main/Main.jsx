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
import PostCreate from './PostCreate';

const im = require('../../assets/icon.png');

export default function Main({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
      }}
    >
      <ScrollView style={{ marginTop: 50, maxHeight: 210 }} horizontal={true}>
        <TouchableOpacity>
          <Card
            style={{ width: 300, height: 200, borderRadius: 10, elevation: 3 }}
          >
            <CardItem header>
              <Text style={{ borderWidth: 1, padding: 5, textAlign: 'center' }}>
                투표
              </Text>
            </CardItem>
            <Text style={{ marginLeft: 20 }}>
              세상에 좋은 팀장이 있다? 없다?
            </Text>
            <CardItem footer>
              <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <Thumbnail small source={im} />
                <Text style={{ alignSelf: 'center', marginLeft: 10 }}>
                  홍길동
                </Text>
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
        <TouchableOpacity>
          <Card
            style={{ width: 300, height: 200, borderRadius: 10, elevation: 3 }}
          >
            <CardItem header>
              <Text style={{ borderWidth: 1, padding: 5, textAlign: 'center' }}>
                투표
              </Text>
            </CardItem>
            <Text>세상에 좋은 팀장이 있다? 없다?</Text>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
        <Card style={{ height: 200 }}>
          <CardItem header>
            <Text>NativeBase</Text>
          </CardItem>
          <Text>세상에 좋은 팀장이 있다? 없다?</Text>
          <CardItem footer>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PostCreate');
        }}
      >
        <View
          style={{
            marginLeft: 15,
            marginTop: 30,
            marginBottom: 20,
            width: 380,
            backgroundColor: '#FFF',
            height: 80,
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 20,
          }}
        >
          <FontAwesome
            style={{ marginLeft: 25 }}
            name="user-circle-o"
            size={35}
            color="black"
          />
          <Text
            style={{
              marginLeft: 80,
              padding: 15,
              position: 'absolute',
              textAlign: 'center',
              backgroundColor: 'gray',
              width: 280,
              color: 'white',
            }}
          >
            함께 나누고 싶은 생각이 있나요?
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
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
            컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터
            태그를 선언합니다. 위에서 선언한 const Stack =
            createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내
            사용합니다. Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할
            수 있는 다양한 옵션들이 담겨 있습니다
          </Text>
          <CardItem footer>
            <RNUrlPreview text={'https://www.youtube.com/'} />
          </CardItem>
          <CardItem>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <FontAwesome
                style={{ alignSelf: 'center' }}
                name="user-circle-o"
                size={10}
                color="black"
              />
              <Text style={{ marginLeft: 3 }}>추천해요</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <FontAwesome
                style={{
                  marginLeft: 200,
                  alignSelf: 'center',
                }}
                name="user-circle-o"
                size={10}
                color="black"
              />
              <Text
                style={{
                  borderRightWidth: 1,
                  paddingRight: 5,
                  borderRightColor: 'gray',
                }}
              >
                공유하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <FontAwesome
                style={{ marginLeft: 7, alignSelf: 'center' }}
                name="user-circle-o"
                size={10}
                color="black"
              />
              <Text>댓글</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
        <Card style={{ height: 350, borderRadius: 10, elevation: 5 }}>
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
          </CardItem>
          <Text style={{ marginLeft: 10 }} numberOfLines={5}>
            컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터
            태그를 선언합니다. 위에서 선언한 const Stack =
            createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내
            사용합니다. Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할
            수 있는 다양한 옵션들이 담겨 있습니다
          </Text>
          <CardItem footer>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardItem: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
