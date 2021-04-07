import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Text, View } from 'native-base';

import Loading from '../Loading';

import HeaderBack from '../../components/header/HeaderBack';
import MemberCard from '../../components/member/MemberCard';

import members from '../../config/member.json';
import { getMemberListByName } from '../../config/UserAPI';

const WindowWidth = Dimensions.get('window').width;

export default function MemberList({ navigation, route }) {
  const [ready, setReady] = useState(false);
  const [memberList, setMemberList] = useState(members.result);
  const [pageNum, setPageNum] = useState(0);

  // console.log(route.params.name);
  const name = route.params.name;

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    }, 2000);
  }, []);

  const download = async () => {
    const result = await getMemberListByName(name, pageNum);

    setMemberList(result);
  };

  const search = () => {
    navigation.goBack();
  };

  return ready ? (
    <Container style={styles.container}>
      <HeaderBack title={'사용자 검색'} navigation={navigation} />

      <TouchableOpacity style={styles.input} onPress={search}>
        <Text>{name}</Text>
      </TouchableOpacity>

      {/* 회원 카드 목록 */}
      <ScrollView showsHorizontalScrollIndicato={false}>
        <View
          style={{
            width: WindowWidth,
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
    backgroundColor: '#EEE',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
});
