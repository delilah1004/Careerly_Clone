import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from 'native-base';
import ImageBlurLoading from 'react-native-image-blur-loading';
const my = require('../assets/icon.png');
const width = Dimensions.get('screen').width;

export default function CommentComponent({ comment }) {
  function dateFormat(d) {
    let date = new Date(d);
    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let hour = date.getHours();
    if (hour < 10) hour = '0' + hour;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  }

  return (
    <ListItem thumbnail style={{ width: width, height: 80 }}>
      <Left>
        <Thumbnail circular small source={my} />
      </Left>
      <Body>
        <Text>이름</Text>
        <Text note numberOfLines={3}>
          내용
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>시간</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
