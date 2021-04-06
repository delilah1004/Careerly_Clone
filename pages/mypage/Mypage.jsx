import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
  ScrollView,
} from 'react-native';
import { Container, Text, View, Thumbnail, Tab, Tabs } from 'native-base';

import * as Animatable from 'react-native-animatable';

import { FontAwesome } from '@expo/vector-icons';

import HeaderSetting from '../../components/header/HeaderSetting';
import Mycard from '../../components/Mycard';

const none = require('../../assets/none.png');
const gift = require('../../assets/gift.png');

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;
const ThumbSize = WindowWidth * 0.2;

export default function Mypage({ navigation }) {
  return (
    <Container style={styles.container}>
      <ScrollView>
        <HeaderSetting navigation={navigation} />

        <View style={styles.banner}>
          {/* 초대 광고 메시지 */}
          <View style={styles.adBox}>
            <Text style={styles.bannertext}>초대할때마다 </Text>
            <Text style={styles.bannertext}>혜택이 계속 쌓입니다!</Text>
          </View>

          {/* 선물 애니메이션 */}
          <Animatable.View
            animation="jello"
            easing="ease-in"
            iterationCount={'infinite'}
            direction="alternate"
          >
            <Thumbnail
              style={{ width: ThumbSize, height: ThumbSize }}
              source={gift}
            />
          </Animatable.View>
        </View>

        {/* 프로필 */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          {/* 사용자 사진 */}
          <FontAwesome name="user-circle-o" size={60} color="gray" />

          {/* 프로필 편집 버튼 */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                navigation.navigate('ProfileUpdate');
              }}
            >
              <Text style={styles.editText}>편집하기</Text>
            </TouchableOpacity>
          </View>

          {/* 사용자 이름 */}
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            홍길동
          </Text>

          {/* 사용자 직함 */}
          <Text style={{ fontSize: 14, marginVertical: 5, color: '#999' }}>
            소프트웨어 엔지니어
          </Text>

          {/* 팔로워/팔로잉 */}
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

        {/* 프로필 완성도 */}
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

          {/* 프로필 완성 스테이지 카드 */}
          <ScrollView
            style={{ margin: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
          </ScrollView>
        </View>

        {/* 게시물 관리 탭 */}
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: 'grey' }}>
          <Tab
            heading="게시물"
            activeTextStyle={{ color: 'black', fontWeight: '600' }}
            textStyle={{ color: 'grey' }}
            tabStyle={{ backgroundColor: '#FFFFFF' }}
            activeTabStyle={{ backgroundColor: '#FFFFFF' }}
          >
            {/* 내가 작성한 게시물 */}
            <View style={styles.postContainer}>
              <Image
                source={none}
                resizeMode="cover"
                style={{
                  width: 100,
                  height: 100,
                  marginVertical: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                아직 업로드한 게시물이 없어요.
              </Text>
              <TouchableOpacity
                style={styles.addFirstPostButton}
                onPress={() => {
                  navigation.navigate('PostCreate');
                }}
              >
                <Text style={styles.addFirstPostText}>첫게시물 작성하기</Text>
              </TouchableOpacity>
            </View>
          </Tab>

          {/* 내가 추천한 게시물 */}
          <Tab
            heading="추천한 게시물"
            activeTextStyle={{ color: 'black', fontWeight: '600' }}
            textStyle={{ color: 'grey' }}
            tabStyle={{ backgroundColor: '#FFFFFF' }}
            activeTabStyle={{ backgroundColor: '#FFFFFF' }}
          ></Tab>
        </Tabs>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#2C98F1',
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adBox: {
    marginVertical: 20,
  },
  bannertext: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
  editButton: {
    backgroundColor: '#EEE',
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginEnd: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: {
    fontSize: 12,
    color: '#777777',
  },
  addFirstPostButton: {
    backgroundColor: '#ed6653',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 20,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFirstPostText: {
    fontSize: 14,
    color: 'white',
  },
  postContainer: {
    flex: 1,
    // height: WindowHeight,
    padding: 20,
  },
});
