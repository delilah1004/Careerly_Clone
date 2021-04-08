import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Text, View, Thumbnail, Tab, Tabs } from 'native-base';

import { Entypo } from '@expo/vector-icons';

import Loading from '../Loading';

import { getMemberInfo } from '../../config/UserAPI';
import HeaderShare from '../../components/header/HeaderShare';

const none = require('../../assets/none.png');
const im = require('../../assets/icon.png');

const WindowWidth = Dimensions.get('window').width;

export default function MemberInfo({ navigation, route }) {
  const memberId = route.params;

  const [ready, setReady] = useState(false);
  const [memberInfo, setMemberInfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    });
  }, []);

  const download = async () => {
    const result = await getMemberInfo(memberId);

    setMemberInfo(result);
  };

  return ready ? (
    <Container style={styles.container}>
      <HeaderShare navigation={navigation} />
      <ScrollView>
        {/* 프로필 */}
        <View style={styles.profileBox}>
          {/* 사용자 사진 */}
          <Thumbnail large source={im} />

          {/* 사용자 이름 */}
          <Text style={styles.userName}>{memberInfo.name}</Text>

          {/* 사용자 직함 */}
          <Text style={styles.userRole}>{memberInfo.role}</Text>

          {/* 팔로워/팔로잉 */}
          <View style={styles.followBox}>
            <TouchableOpacity
              style={[styles.flexRow, { alignItems: 'center' }]}
              onPress={() => navigation.push('FollowerList', user._id)}
            >
              <Text style={styles.followText}>팔로워</Text>
              <Text style={styles.followNumberText}>
                {memberInfo.followerCnt}
              </Text>
            </TouchableOpacity>
            <Text
              style={{ color: '#C7C7C7', fontSize: 13, marginHorizontal: 20 }}
            >
              |
            </Text>
            <TouchableOpacity
              style={[styles.flexRow, { alignItems: 'center' }]}
              onPress={() => navigation.push('FollowingList', memberInfo._id)}
            >
              <Text style={styles.followText}>팔로잉</Text>
              <Text style={styles.followNumberText}>
                {memberInfo.followingCnt}
              </Text>
            </TouchableOpacity>
          </View>

          {/* 자기소개 */}
          <Text style={{ fontSize: 14, marginBottom: 20 }}>
            자기소개입니다.
          </Text>

          {/* 팔로우 버튼 */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>팔로우</Text>
          </TouchableOpacity>
        </View>

        {/* 학력/경력 */}
        <View
          style={{
            marginTop: 30,
            padding: 20,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderColor: '#EEEEEE',
          }}
        >
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Entypo
              name="suitcase"
              size={15}
              color="#A2D9D3"
              style={{ marginRight: 10, marginTop: 3 }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              서울대학교 AI연구원
              <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                {'   '}
                웹개발자
              </Text>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Entypo
              name="suitcase"
              size={15}
              color="#A2D9D3"
              style={{ marginRight: 10, marginTop: 3 }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              네이버
              <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                {'   '}
                체험형 인턴
              </Text>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Entypo
              name="suitcase"
              size={15}
              color="#A2D9D3"
              style={{ marginRight: 10, marginTop: 3 }}
            />
            <Text style={{ fontWeight: 'bold' }}>
              카카오
              <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                {'   '}
                체험형 인턴
              </Text>
            </Text>
          </View>
        </View>

        {/* 게시물 관리 탭 */}
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#555' }}>
          {/* 내가 작성한 게시글 목록 */}
          <Tab
            heading="게시물"
            activeTextStyle={styles.tabBaractiveText}
            textStyle={styles.tabBarText}
            tabStyle={{ backgroundColor: '#FFF' }}
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
            tabStyle={{ backgroundColor: '#FFF' }}
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

  // 프로필 영역
  profileBox: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 사용자 이름
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
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

  // 팔로우 버튼
  button: {
    width: '90%',
    padding: 5,
    backgroundColor: '#FFEDEE',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#EB6552',
    fontSize: 14,
    padding: 3,
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
