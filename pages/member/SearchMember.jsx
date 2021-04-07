import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Container, Input } from 'native-base';

import Loading from '../Loading';

import { Ionicons } from '@expo/vector-icons';

import MemberCategory from '../../components/member/MemberCategory';
import MemberCard from '../../components/member/MemberCard';

import data from '../../config/data.json';
import members from '../../config/member.json';
import { getMemberListByCategory } from '../../config/UserAPI';

const WindowWidth = Dimensions.get('window').width;
const ScrollWidth = WindowWidth * 2.6;

export default function SearchMember({ navigation }) {
  const category = data.category;
  const [ready, setReady] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [cate, setCate] = useState('프로덕트 매니저/서비스 기획');
  const [name, setName] = useState('');
  const [memberList, setMemberList] = useState(members.result);

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    }, 2000);
  }, []);

  const download = async () => {
    // console.log(cate, pageNum);
    const result = await getMemberListByCategory(cate, pageNum);

    setMemberList(result);
  };

  const search = () => {
    navigation.push('MemberList', { name });
  };

  return ready ? (
    <Container style={styles.container}>
      {/* 회원 카드 목록 */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.content}>
          {/* 검색창 */}
          <View style={styles.searchBar}>
            <Input
              style={styles.input}
              placeholder={'이름으로 검색해보세요.'}
              placeholderTextColor="#AAA"
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
              {category.map((title, i) => {
                return (
                  <MemberCategory
                    title={title}
                    setFunc={setCate}
                    getData={download}
                    select={cate}
                    key={i}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>

        {/* 회원 목록 */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: (WindowWidth * 0.05) / 2,
          }}
        >
          {memberList.map((member, i) => {
            return (
              <MemberCard navigation={navigation} member={member} key={i} />
            );
          })}
        </View>
      </ScrollView>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    backgroundColor: '#EEE',
  },
  content: {
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#FFF',
    height: '100%',
    fontSize: 14,
    borderRadius: 5,
    paddingLeft: 15,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ed6653',
    width: 50,
    height: '100%',
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cateContainer: {
    flex: 1,
  },
});
