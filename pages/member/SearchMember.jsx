import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Container, Input } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

import MemberCategory from '../../components/member/MemberCategory';
import MemberCard from '../../components/member/MemberCard';

import data from '../../config/data.json';
import members from '../../config/member.json';

const ScrollWidth = Dimensions.get('window').width * 2.6;

export default function SearchMember({ navigation }) {
  const category = data.category;

  const [name, setName] = useState('');
  const [cate, setCate] = useState('추천');
  const [memberList, setMemberList] = useState(members.result);

  const setFunc = (title) => {
    setCate(title);
  };

  const search = () => {
    navigation.push('MemberList', { name });
  };

  return (
    <Container style={styles.container}>
      {/* 회원 카드 목록 */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
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
                setName(text);
              }}
            />
            <TouchableOpacity style={styles.button} onPress={search}>
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

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {memberList.map((member) => {
            return <MemberCard navigation={navigation} member={member} />;
          })}
        </View>
      </ScrollView>
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
