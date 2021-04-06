import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
} from 'react-native';
import {
  Container,
  Form,
  Textarea,
  Text,
  View,
  Item,
  Input,
  Header,
  Icon,
  Button,
  Thumbnail,
  Content,
  Tab,
  Tabs,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Animatable from 'react-native-animatable';

import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
  Entypo,
} from '@expo/vector-icons';

const none = require('../../assets/none.png');
const none2 = require('../../assets/123.png');
const im = require('../../assets/icon.png');
const containerWidth = Dimensions.get('window').width / 3;
const containerheight = Dimensions.get('screen').height;

import HeaderShare from '../../components/header/HeaderShare';
import { ScrollView } from 'react-native-gesture-handler';
export default function Mypage({ navigation }) {
  return (
    <ScrollView>
      <Container style={{ height: containerheight * 1.65 }}>
        <HeaderShare navigation={navigation} />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Thumbnail large source={im} style={{ marginTop: 10 }} />
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingLeft: 280,
              paddingBottom: 95,
            }}
          ></View>
          <Text style={{ fontSize: 25, marginTop: 10 }}>홍길동</Text>
          <Text style={{ fontSize: 15, marginTop: 10, color: '#777777' }}>
            소프트웨어 엔지니어
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginRight: 25 }}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  color: 'black',
                }}
              >
                팔로워
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  marginLeft: 30,
                  color: 'black',
                }}
              >
                |
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 10,
                  color: 'black',
                }}
              >
                팔로잉
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 30,
            }}
          >
            자기소개입니다.
          </Text>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 30,
            }}
          >
            👍 (+ 커리어리 프로필을 알아도 서로 연락할 길이 없는 것 같다고요? 곧
            있을 업데이트를 기대해주세요!🙏)`
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>팔로우</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 30,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderColor: '#EEEEEE',
          }}
        >
          <View style={{ marginLeft: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <Entypo
                name="suitcase"
                size={15}
                color="#8BFAF5"
                style={{ marginRight: 10, marginTop: 3 }}
              />
              <Text style={{ fontWeight: 'bold' }}>
                노나라
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  {'   '}
                  마케터
                </Text>
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo
                name="suitcase"
                size={15}
                color="#8BFAF5"
                style={{ marginRight: 10, marginTop: 3 }}
              />
              <Text style={{ fontWeight: 'bold' }}>
                노나라
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  {'   '}
                  마케터
                </Text>
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Entypo
                name="suitcase"
                size={15}
                color="#8BFAF5"
                style={{ marginRight: 10, marginTop: 3 }}
              />
              <Text style={{ fontWeight: 'bold' }}>
                노나라
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  {'   '}
                  마케터
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: 'grey' }}>
          <Tab
            heading="게시물"
            activeTextStyle={{ color: 'black', fontWeight: '600' }}
            textStyle={{ color: 'grey' }}
            tabStyle={{ backgroundColor: '#FFFFFF' }}
            activeTabStyle={{ backgroundColor: '#FFFFFF' }}
          >
            <View style={styles.container}>
              <Image
                source={none}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginLeft: 250,
                }}
              />
              <Text
                style={{
                  width: 250,
                  marginTop: 15,
                  textAlign: 'center',
                  marginLeft: 70,
                }}
              >
                아직 업로드한 게시물이 없어요.
              </Text>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  navigation.navigate('PostCreate');
                }}
              >
                <Text style={styles.buttonText2}>첫게시물 작성하기</Text>
              </TouchableOpacity>
            </View>
          </Tab>
          <Tab
            heading="추천한 게시물"
            activeTextStyle={{ color: 'black', fontWeight: '600' }}
            textStyle={{ color: 'grey' }}
            tabStyle={{ backgroundColor: '#FFFFFF' }}
            activeTabStyle={{ backgroundColor: '#FFFFFF' }}
          >
            <View style={styles.container}>
              <Image
                source={none2}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginLeft: 250,
                }}
              />
              <Text
                style={{
                  width: 250,
                  marginTop: 15,
                  textAlign: 'center',
                  marginLeft: 70,
                }}
              >
                아직 추천한 게시물이 없어요.
              </Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: containerWidth,
  },

  button2: {
    width: 135,
    height: 30,

    marginTop: 20,
    backgroundColor: '#ed6653',
    borderRadius: 5,
    marginLeft: 250,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2: {
    fontSize: 15,
    color: 'white',
  },

  button: {
    marginTop: 10,
    width: 350,
    padding: 5,
    backgroundColor: '#FFEDEE',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#EB6552',
  },
});
