import React from 'react';
import { StyleSheet, TouchableOpacity, Share } from 'react-native';
import {
  Text,
  Card,
  CardItem,
  Thumbnail,
  View,
  Grid,
  Col,
  Row,
} from 'native-base';

import RNUrlPreview from 'react-native-url-preview';

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';

const im = require('../../assets/icon.png');

const share = () => {
  Share.share({
    message: `공유 \n\n 라일락 \n\n 코인`,
  });
};

export default function MainCard({ navigation }) {
  return (
    // 투표
    <Card>
      <CardItem header>
        <Grid>
          <Col
            size={2}
            style={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Thumbnail medium source={im} />
          </Col>
          <Col
            size={8}
            style={{
              justifyContent: 'space-around',
            }}
          >
            <Row>
              <Text style={styles.name}>홍길동</Text>
              <Text> 벤처케피탈리스트</Text>
            </Row>
            <Text style={styles.time}>1시간전</Text>
          </Col>
        </Grid>
      </CardItem>
      <Text style={{ marginLeft: 10 }} numberOfLines={5}>
        컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를
        선언합니다. 위에서 선언한 const Stack = createStackNavigator(); Stack
        변수에 들어있는 태그를 꺼내 사용합니다. Stack.Navigator 태그 내부엔
        페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다
      </Text>
      <CardItem footer>
        <RNUrlPreview text={'https://www.youtube.com/'} />
      </CardItem>
      <CardItem>
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
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            navigation.navigate('PostInfo');
          }}
        >
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
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
  },
  time: {
    fontSize: 15,
    color: 'gray',
  },
});
