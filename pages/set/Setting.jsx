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

import { signOut } from '../../config/APIFunctions';

const containerWidth = Dimensions.get('window').width / 3;

export default function Setting({ navigation }) {
  const logout = async () => {
    await signOut(navigation);
  };
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'설정'} />
      <Content style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserUpdate');
          }}
        >
          <Grid>
            <Col
              size={4}
              style={{
                height: 50,
                marginBottom: 30,
                flexDirection: 'row',
              }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color="#929292"
                style={{ marginTop: 10, marginLeft: 10 }}
              />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 18,
                }}
              >
                계정 관리
              </Text>
            </Col>
            <Col size={1} style={{ height: 50 }}>
              <AntDesign
                name="right"
                size={20}
                color="#929292"
                style={{ marginLeft: 30, marginTop: 10 }}
              />
            </Col>
          </Grid>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PasswordChange');
          }}
        >
          <Grid>
            <Col
              size={4}
              style={{
                height: 50,
                marginBottom: 30,
                flexDirection: 'row',
              }}
            >
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="#929292"
                style={{ marginTop: 10, marginLeft: 10 }}
              />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 18,
                }}
              >
                비밀번호 변경
              </Text>
            </Col>
            <Col size={1} style={{ height: 50 }}>
              <AntDesign
                name="right"
                size={20}
                color="#929292"
                style={{ marginLeft: 30, marginTop: 10 }}
              />
            </Col>
          </Grid>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Alert');
          }}
        >
          <Grid>
            <Col
              size={4}
              style={{
                height: 50,
                marginBottom: 30,
                flexDirection: 'row',
              }}
            >
              <Fontisto
                name="bell"
                size={24}
                color="#929292"
                style={{ marginTop: 10, marginLeft: 10 }}
              />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 18,
                }}
              >
                알림
              </Text>
            </Col>
            <Col size={1} style={{ height: 50 }}>
              <AntDesign
                name="right"
                size={20}
                color="#929292"
                style={{ marginLeft: 30, marginTop: 10 }}
              />
            </Col>
          </Grid>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ServiceCenter');
          }}
        >
          <Grid>
            <Col
              size={4}
              style={{
                height: 50,
                marginBottom: 30,
                flexDirection: 'row',
              }}
            >
              <AntDesign
                name="customerservice"
                size={24}
                color="#929292"
                style={{ marginTop: 10, marginLeft: 10 }}
              />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 18,
                }}
              >
                고객센터
              </Text>
            </Col>
            <Col size={1} style={{ height: 50 }}>
              <AntDesign
                name="right"
                size={20}
                color="#929292"
                style={{ marginLeft: 30, marginTop: 10 }}
              />
            </Col>
          </Grid>
        </TouchableOpacity>
      </Content>
      <TouchableOpacity onPress={logout}>
        <Text
          style={{
            textAlign: 'center',
            paddingBottom: 90,
            textDecorationLine: 'underline',
          }}
        >
          로그아웃
        </Text>
      </TouchableOpacity>
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
