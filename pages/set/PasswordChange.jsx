import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Container, Form, View } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';

import InputItem from '../../components/InputItem';

import { findPassword } from '../../config/UserAPI';
export default function UserUpdate({ navigation }) {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [currentpassword, setCurrentpassword] = useState('');

  const PassWordChange = () => {
    if (password == '') {
      setPassword('새 비밀번호를 입력해주세요');
      return false;
    } else {
      setPassword('');
    }

    if (password !== passwordConfirm) {
      setPasswordConfirm('비밀번호가 서로 일치 하지 않습니다.');
      return false;
    } else {
      setPasswordConfirm('');
    }

    updatePassword(currentpassword, password, passwordConfirm);
  };

  return (
    <Container>
      <HeaderBack navigation={navigation} title={'비밀번호 변경하기'} />
      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem
            title={'현재 비밀번호'}
            hint={'현재 비밀번호 입력'}
            value={currentpassword}
            setFunc={setCurrentpassword}
          />
          <InputItem
            title={'새 비밀번호 '}
            hint={'새 비밀번호 입력'}
            value={password}
            type={'password'}
            setFunc={setPassword}
          />
          <InputItem
            title={'새 비밀번호 확인'}
            hint={'새 비밀번호 확인'}
            value={passwordConfirm}
            type={'password'}
            setFunc={setPasswordConfirm}
          />
        </Form>

        <TouchableOpacity
          style={styles.button}
          onPress={() => PassWordChange()}
        >
          <Text style={styles.text}>비밀번호 변경하기</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  form: {
    marginVertical: 10,
  },
  terms: {
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 12,
    color: 'grey',
  },
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  button: {
    backgroundColor: '#ed6653',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
