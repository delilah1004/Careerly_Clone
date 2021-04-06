import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Col, Container, Grid, Input, Row } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import MemberCategory from '../../components/member/MemberCategory';

import data from '../../config/data.json';
import MemberCard from '../../components/member/MemberCard';

const ScrollWidth = Dimensions.get('window').width * 2;

export default function SearchMember() {
  const category = data.category;

  const members = {
    result: [
      { _id: 'dd', name: 'test1', role: '백엔드 개발자', userImg: 'aaa.jpg' },
      {
        _id: 'dd',
        name: 'test2',
        role: '클라이언트 개발자',
        userImg: 'nnn.jpg',
      },
      { _id: 'dd', name: 'test3', role: '게임 개발자', userImg: 'eee.jpg' },
      {
        _id: 'dd',
        name: 'test4',
        role: '데이터사이언티스트 ',
        userImg: 'qqq.jpg',
      },
    ],
  };

  const [searchName, setSearchName] = useState('');

  const [memberList, setMemberList] = useState(members);

  const [cate, setCate] = useState('추천');

  const setFunc = (title) => {
    setCate(title);
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            width: '85%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* 검색창 */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
            }}
          >
            <Input
              style={styles.input}
              placeholder={'이름으로 검색해보세요.'}
              onChangeText={(text) => {
                setSearchName(text);
              }}
            />
            <TouchableOpacity style={styles.button}>
              <Ionicons name="search-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>

          {/* 카테고리 */}
          <ScrollView
            style={{ marginVertical: 20 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width: ScrollWidth,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <MemberCategory title={'추천'} setFunc={setCate} select={cate} />
              {category.map((title) => {
                return (
                  <MemberCategory
                    title={title}
                    setFunc={setFunc}
                    select={cate}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        {/* 회원 카드 목록 */}
        <ScrollView
          style={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicato={false}
        >
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    backgroundColor: '#EEE',
  },
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cateContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingLeft: 15,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ed6653',
    padding: 15,
    width: 50,
    marginLeft: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
