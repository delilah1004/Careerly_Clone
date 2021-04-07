import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ProgressBarAndroid,
  Image,
  ScrollView,
} from 'react-native';
import { Container, Text, View, Thumbnail, Tab, Tabs } from 'native-base';

import Loading from '../Loading';

import * as Animatable from 'react-native-animatable';

import { FontAwesome } from '@expo/vector-icons';

import HeaderSetting from '../../components/header/HeaderSetting';
import Mycard from '../../components/Mycard';

import { getUserInfo } from '../../config/UserAPI';

const none = require('../../assets/none.png');
const gift = require('../../assets/gift.png');

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;
const ThumbSize = WindowWidth * 0.2;

export default function Mypage({ navigation }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    }, 2000);
  }, []);

  const download = async () => {
    const result = await getUserInfo();

    console.log(result);

    setUser(result);
  };

  return ready ? (
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
            <Thumbnail style={styles.gift} source={gift} />
          </Animatable.View>
        </View>

        {/* 프로필 */}
        <View style={styles.profileBox}>
          {/* 사용자 사진 */}
          <FontAwesome name="user-circle-o" size={60} color="gray" />

          {/* 프로필 편집 버튼 */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              navigation.navigate('ProfileUpdate');
            }}
          >
            <Text style={styles.editText}>편집하기</Text>
          </TouchableOpacity>

          {/* 사용자 이름 */}
          <Text style={styles.userName}>{user.name}</Text>

          {/* 사용자 직함 */}
          <Text style={styles.userRole}>{user.role}</Text>

          {/* 팔로워/팔로잉 */}
          <View style={styles.followBox}>
            <TouchableOpacity
              style={[styles.flexRow, { alignItems: 'center' }]}
              onPress={() => navigation.push('FollowerList', user._id)}
            >
              <Text style={styles.followText}>팔로워</Text>
              <Text style={styles.followNumberText}>{user.followerCnt}</Text>
            </TouchableOpacity>
            <Text
              style={{ color: '#C7C7C7', fontSize: 13, marginHorizontal: 20 }}
            >
              |
            </Text>
            <TouchableOpacity
              style={[styles.flexRow, { alignItems: 'center' }]}
              onPress={() => navigation.push('FollowingList', user._id)}
            >
              <Text style={styles.followText}>팔로잉</Text>
              <Text style={styles.followNumberText}>{user.followingCnt}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 프로필 완성도 */}
        <View style={styles.cardContainer}>
          <View style={styles.cardContainerTop}>
            {/* 프로필 완성 장려 문구 */}
            <Text style={styles.mention}>
              프로필을 완성하고🎉 동료들과 교류 해보세요!
            </Text>
            <Text style={styles.finishNumber}>1/4</Text>
          </View>

          {/* Progress Bar */}
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.2}
            style={styles.progressBar}
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
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#555' }}>
          {/* 내가 작성한 게시글 목록 */}
          <Tab
            heading="게시물"
            activeTextStyle={styles.tabBaractiveText}
            textStyle={styles.tabBarText}
            tabStyle={styles.tabBarBackground}
            activeTabStyle={styles.tabBarBackground}
          >
            {/* 내가 작성한 게시물 */}
            <View style={styles.postContainer}>
              {/* 게시글 아이콘 */}
              <Image source={none} resizeMode="cover" style={styles.postIcon} />

              {/* 게시글 없을 때 멘트 */}
              <Text style={{ textAlign: 'center' }}>
                아직 업로드한 게시물이 없어요.
              </Text>

              {/* 게시글 작성하기 버튼 */}
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

          {/* 내가 추천한 게시글 목록 */}
          <Tab
            heading="추천한 게시물"
            activeTextStyle={styles.tabBaractiveText}
            textStyle={styles.tabBarText}
            tabStyle={styles.tabBarBackground}
            activeTabStyle={styles.tabBarBackground}
          ></Tab>
        </Tabs>
      </ScrollView>
    </Container>
  ) : (
    <Loading />
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

  gift: {
    width: ThumbSize,
    height: ThumbSize,
  },

  // 프로필 영역
  profileBox: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 프로필 편집 버튼
  editButton: {
    backgroundColor: '#EEE',
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginEnd: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 프로필 편집 Text
  editText: {
    fontSize: 12,
    color: '#777777',
  },
  // 사용자 이름
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  // 사용자 직함
  userRole: {
    color: '#999',
    fontSize: 14,
    marginVertical: 5,
  },
  // flexDirection -> row
  flexRow: {
    flexDirection: 'row',
  },
  followBox: {
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
  },
  // Follow Text
  followText: {
    fontSize: 15,
  },
  // Follow Number Text
  followNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  // 프로필 완성도 영역
  cardContainer: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  // 프로필 완성도 영역 상단
  cardContainerTop: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // 프로필 완성 장려 문구
  mention: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  // 프로필 완성도
  finishNumber: {
    color: '#46ACA4',
    fontSize: 15,
    fontWeight: 'bold',
  },
  // Progress Bar
  progressBar: {
    width: '90%',
    borderRadius: 10,
  },

  // Tab Bar
  tabBaractiveText: { color: 'black', fontWeight: '600' },
  tabBarText: { color: '#DBDBDB' },
  tabBarBackground: { backgroundColor: '#FFF' },

  // post 영역
  postContainer: {
    flex: 1,
    // height: WindowHeight,
    padding: 20,
  },

  // 게시글 아이콘
  postIcon: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  // 게시글 작성하기 버튼
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
  // 게시글 작성하기 Text
  addFirstPostText: {
    fontSize: 14,
    color: 'white',
  },
});
