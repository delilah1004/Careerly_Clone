import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import {
  Container,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Input,
  Item,
  List,
} from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';
import CommentCompont from '../../components/CommentComponent';

import RNUrlPreview from 'react-native-url-preview';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

const im = require('../../assets/icon.png');

export default function PostInfo({ navigation, route }) {
  const share = () => {
    Share.share({
      message: `공유 \n\n 라일락 \n\n 코인`,
    });
  };
  return (
    <ScrollView>
      <HeaderBack title={`홍길동 님의 게시물`} navigation={navigation} />
      <Container style={{ backgroundColor: 'rgba(52, 52, 52, 0.1)' }}>
        <Card style={{ height: 750 }}>
          <CardItem style={{ borderRadius: 10 }} header>
            <Thumbnail small source={im} style={{ marginTop: 10 }} />
            <Text
              style={{
                marginLeft: 15,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              홍길동
              <View style={{ marginLeft: 30, paddingRight: 20 }}>
                <Text
                  style={{ fontSize: 10, textAlign: 'center', marginLeft: 10 }}
                >
                  3시간 전
                </Text>
              </View>
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: 70,
                paddingTop: 50,
                fontSize: 13,
                color: 'gray',
              }}
            >
              벤처케피탈리스트
            </Text>

            <View>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>팔로우</Text>
              </TouchableOpacity>
            </View>
          </CardItem>
          <CardItem>
            <Text style={{ marginLeft: 10, marginTop: 5 }}>
              `[식목일: 종이 명함말고 커리어리 프로필 어떠세요? 🌳] 커리어리
              여러분 안녕하세요! 🌈 4월 5일, 오늘은 식목일이에요. 커리어리
              팀원들과 나무에 대해 이야기하던 중, 종이 (나무)로 만드는 명함에
              대한 이야기 나왔어요! 그래서 오늘은 종이 명함에 대해서 짧게
              이야기해보려고 해요. 📌종이 명함 - 무엇이 문제일까요? ✅ 매년, 약
              100억 장의 종이 명함이 만들어져요. ✅ 매년, 약 600만 그루의 나무가
              명함을 만드는 데에 사용돼요. ✅ 매년, 만들어지는 명함의 약 90%는
              버려져요. 환경 보호를 위해 종이 명함 대신, 커리어리 프로필을
              공유해보는 게 어떨까요? 👍 (+ 커리어리 프로필을 알아도 서로 연락할
              길이 없는 것 같다고요? 곧 있을 업데이트를 기대해주세요!🙏)`
            </Text>
          </CardItem>
          <CardItem>
            <RNUrlPreview text={'https://www.youtube.com/'} />
          </CardItem>
          <CardItem footer>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Octicons
                name="light-bulb"
                style={{
                  alignSelf: 'center',
                }}
                size={15}
                color="#8BFAF5"
              />
              <Text style={{ marginLeft: 3, fontSize: 12 }}>추천해요</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => {
                share();
              }}
            >
              <MaterialIcons
                style={{
                  marginLeft: 200,
                  marginRight: 10,
                  alignSelf: 'center',
                }}
                name="share"
                size={15}
                color="#8BFAF5"
              />
              <Text
                style={{
                  fontSize: 12,
                  borderRightWidth: 1,
                  paddingRight: 10,
                  borderRightColor: 'gray',
                }}
              >
                공유하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={15}
                style={{
                  marginLeft: 10,
                  marginRight: 5,
                  alignSelf: 'center',
                }}
                color="#8BFAF5"
              />
              <Text
                style={{
                  fontSize: 12,
                }}
              >
                댓글
              </Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </Container>
      <Item style={{ backgroundColor: 'white' }}>
        <Input placeholder="게시물에 대해 이야기를 나눠보세요" />
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>등록</Text>
        </TouchableOpacity>
      </Item>
      <List style={{ backgroundColor: 'white' }}>
        <CommentCompont />
        <CommentCompont />
        <CommentCompont />
      </List>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button1: {
    width: 65,
    height: 30,
    marginEnd: 15,
    marginLeft: 135,
    backgroundColor: '#FAE0E8',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: 65,
    height: 30,
    marginEnd: 15,
    marginLeft: 80,
    backgroundColor: '#ed6653',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText1: {
    fontSize: 12,
    color: '#ed6653',
  },
  buttonText2: {
    fontSize: 12,
    color: 'white',
  },
});
