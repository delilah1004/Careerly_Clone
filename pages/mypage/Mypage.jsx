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
} from '@expo/vector-icons';

const none = require('../../assets/none.png');
const gift = require('../../assets/gift.png');
const containerWidth = Dimensions.get('window').width / 3;
const containerheight = Dimensions.get('screen').height;

import Mycard from '../../components/Mycard';

import HeaderSetting from '../../components/header/HeaderSetting';
import { ScrollView } from 'react-native-gesture-handler';
export default function Mypage({ navigation }) {
  return (
    <ScrollView>
      <Container style={{ height: containerheight * 1.65 }}>
        <HeaderSetting navigation={navigation} />

        <Grid style={styles.banner}>
          <Col size={5} style={{ padding: 15 }}>
            <Text style={styles.bannertext}>초대할때마다 </Text>
            <Text style={styles.bannertext}>혜택이 계속 쌓입니다!</Text>
          </Col>
          <Animatable.View
            animation="jello"
            easing="ease-in"
            iterationCount={'infinite'}
            direction="alternate"
          >
            <Col size={2} style={{ padding: 20 }}>
              <Thumbnail source={gift} />
            </Col>
          </Animatable.View>
        </Grid>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          <FontAwesome name="user-circle-o" size={60} color="gray" />
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              paddingLeft: 280,
              paddingBottom: 95,
            }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>편집하기</Text>
            </TouchableOpacity>
          </View>
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
        </View>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            marginTop: 10,
            maxHeight: 300,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 8,
            }}
          >
            프로필을 완성하고🎉 동료들과 교류 해보세요!
          </Text>
          <Text
            style={{
              marginLeft: 350,
              position: 'absolute',
              marginTop: 10,
              color: '#46ACA4',
            }}
          >
            1/4
          </Text>

          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.2}
            style={{
              width: 390,
              marginLeft: 10,
              marginTop: 20,
              borderRadius: 10,
            }}
          />

          <ScrollView style={{ marginTop: 10 }} horizontal={true}>
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
          </ScrollView>
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
              <TouchableOpacity style={styles.button2}>
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
          ></Tab>
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
  banner: {
    marginTop: 20,
    backgroundColor: '#2C98F1',
    maxHeight: 90,
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
  },
  bannertext: {
    marginTop: 3,
    marginLeft: 11,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  button: {
    width: 70,
    height: 30,
    marginEnd: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: '#777777',
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
});
