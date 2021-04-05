import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {
  Container,
  Form,
  Textarea,
  Text,
  View,
  Item,
  Input,
  Header,
  Button,
  Content,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  AntDesign,
} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HeaderBack from '../../components/header/HeaderBack';
import TextButton from '../../components/TextButton';

const containerWidth = Dimensions.get('window').width / 3;
export default function ServiceCenter({ navigation }) {
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'무엇이든 물어보세요!'} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
          준비중입니다
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    color: '#000',
  },
  url: {
    marginTop: '100',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#EEE',
    alignItems: 'center',
  },
  container: {
    width: containerWidth,
  },
  back: {
    marginStart: 15,
  },
  title: {
    alignSelf: 'center',
  },
  button: {
    width: 70,
    height: 30,
    marginEnd: 15,
    backgroundColor: 'pink',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
});
