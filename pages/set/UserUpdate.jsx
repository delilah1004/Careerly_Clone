import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, View } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';
import InputItem from '../../components/InputItem';
import ButtonItem from '../../components/ButtonItem';

export default function UserUpdate({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');

  const UserUpdate = () => {
    if (email == '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }
    if (number == '') {
      setNumberError('휴대폰 번호를 입력해주세요');
      return false;
    } else {
      setNumberError('');
    }
  };

  return (
    <Container>
      <HeaderBack navigation={navigation} title={'계정 정보 변경하기'} />
      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem
            title={'이메일'}
            hint={'이메일 입력'}
            placeholder={'이메일 입력'}
            type={'email'}
            value={email}
            error={emailError}
            setFunc={setEmail}
          />
          <InputItem
            title={'휴대폰 번호'}
            hint={'휴대폰 번호 입력'}
            type={'number'}
            placeholder={'휴대폰 번호 입력'}
            value={number}
            error={numberError}
            setFunc={setNumber}
          />
        </Form>

        <ButtonItem
          title="계정정보 변경하기"
          navigation={navigation}
          page={'Setting'}
        />
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
});
