import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Form, View } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';

import InputItem from '../../components/InputItem';
import ButtonItem from '../../components/ButtonItem';
import { findPassword } from '../../config/UserAPI';
export default function UserUpdate({ navigation }) {
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const PassWordFind = () => {
    if (email == '') {
      setEmail('이메일을 입력해주세요');
      return false;
    } else {
      setEmail('');
    }
    findPassword(email);
  };

  return (
    <Container>
      <HeaderBack navigation={navigation} title={'비밀번호 찾기'} />
      <View style={styles.container}>
        <Text style={styles.label}>비밀번호를 잊으셨나요?</Text>
        <Form style={styles.form}>
          <InputItem
            title={'계정 이메일 주소'}
            hint={'이메일 주소'}
            error={passwordError}
            value={email}
            type={'email'}
            setFunc={setEmail}
          />
        </Form>

        <TouchableOpacity style={styles.button} onPress={() => PassWordFind()}>
          <Text style={styles.text}>비밀번호 재설정 이메일 받기</Text>
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
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 70,
    fontSize: 25,
    marginRight: 5,
    color: '#000',
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
