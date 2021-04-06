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

import { getMemberListByName } from '../../config/UserAPI';
import members from '../../config/member.json';
const ViewWidth = Dimensions.get('window').width;
export default function MemberList({ navigation, route }) {
  const [ready, setReady] = useState(false);
  const [memberList, setMemberList] = useState(members.result);

  // console.log(route.params.name);
  const name = route.params.name;

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    }, 2000);
  }, []);

  const download = async () => {
    const result = await getMemberListByName(name, 1);

    console.log(result);
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
          {memberList.map((member) => {
            return <MemberCard navigation={navigation} member={member} />;
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
    flexWrap: 'wrap',
    width: ViewWidth * 1.05,
    backgroundColor: '#EEE',
  },
  input: {
    width: ViewWidth / 1.14,
    backgroundColor: '#FFF',
    borderRadius: 5,
    alignSelf: 'center',
    padding: 15,
    marginTop: 8,
  },
});
