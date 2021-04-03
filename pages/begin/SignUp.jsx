import React, { useState } from 'react';

import { StyleSheet } from 'react-native';
import { Container, Text, Form, View } from 'native-base';

import InputItem from '../../components/InputItem';
import ButtonItem from '../../components/ButtonItem';
import TextButton from '../../components/TextButton';

export default function SignUpPage({ navigation }) {
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const doSignUp = () => {
    if (nickName == '') {
      setNickNameError('이름을 입력해주세요');
      return false;
    } else {
      setNickNameError('');
    }
    if (email == '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }
    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }
    registration(nickName, email, password);
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
            type={'nickName'}
            value={nickName}
            error={nickNameError}
            setFunc={setNickName}
          />
          <InputItem
            title={'이메일'}
            hint={'이메일 입력'}
            type={'email'}
            value={email}
            error={emailError}
            setFunc={setEmail}
          />
          <InputItem
            title={'비밀번호'}
            hint={'비밀번호 입력'}
            type={'password'}
            value={password}
            error={passwordError}
            setFunc={setPassword}
          />
        </Form>

        <Text style={styles.terms}>
          {`'회원가입'을 누름으로써\n커리어리의 이용약관과 개인정보처리 방침에 동의합니다`}
        </Text>

        <ButtonItem
          title="이메일로 시작하기"
          navigation={navigation}
          page={'TabNavigator'}
        />

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
