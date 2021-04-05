import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Text, Form, View } from 'native-base';

import InputItem from '../../components/InputItem';
import TextButton from '../../components/TextButton';

import { emailCheck } from '../../config/APIFunctions';

export default function SignUpPage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const check = () => {
    emailCheck(name, email, password, navigation);
  };

  let showButton = () => {
    if (name == '' || email == '' || password == '') {
      return (
        <TouchableOpacity disabled style={[styles.button, styles.disabled]}>
          <Text style={styles.text}>이메일로 시작하기</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.button, styles.active]}
          onPress={check}
        >
          <Text style={styles.text}>이메일로 시작하기</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>가입하고 커리어리를</Text>
          <Text style={styles.titleText}>무료로 이용하세요</Text>
        </View>
        <Form style={styles.form}>
          <InputItem
            title={'이름'}
            hint={'이름 입력'}
            type={'name'}
            setFunc={setName}
          />
          <InputItem
            title={'이메일'}
            hint={'이메일 입력'}
            type={'email'}
            setFunc={setEmail}
          />
          <InputItem
            title={'비밀번호'}
            hint={'비밀번호 입력'}
            type={'password'}
            setFunc={setPassword}
          />
        </Form>
        <Text style={styles.terms}>
          {`'회원가입'을 누름으로써\n커리어리의 이용약관과 개인정보처리 방침에 동의합니다`}
        </Text>

        {showButton()}

        <View style={styles.textButtonContainer}>
          <TextButton
            title={'고객센터'}
            navigation={navigation}
            page={'ServiceCenter'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <Text style={{ fontSize: 12 }}>이미 회원이신가요? </Text>
            <TextButton
              title={'로그인하기'}
              navigation={navigation}
              page={'SignIn'}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    width: '90%',
    justifyContent: 'center',
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
  button: {
    backgroundColor: '#ed6653',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    opacity: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: 'white',
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
