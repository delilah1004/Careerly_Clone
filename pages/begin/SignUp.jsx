import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Right,
  View,
} from 'native-base';
import ItemInput from '../../components/ItemInput';
import ButtonItem from '../../components/ButtonItem';

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
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <Text style={styles.title}>
          <Text style={styles.title}>가입하고 커리어리를</Text>
        </Text>
        <Text style={styles.title2}>무료로 이용하세요</Text>
        <Form style={styles.form}>
          <Text style={{ marginTop: 5, marginBottom: 20, fontWeight: '700' }}>
            이름
          </Text>
          <ItemInput
            title={'이름 입력'}
            type={'nickName'}
            value={nickName}
            error={nickNameError}
            setFunc={setNickName}
          />
          <Text style={{ marginTop: 5, marginBottom: 20, fontWeight: '700' }}>
            이메일
          </Text>
          <ItemInput
            title={'이메일 입력'}
            type={'email'}
            value={email}
            error={emailError}
            setFunc={setEmail}
          />
          <Text style={{ marginTop: 5, marginBottom: 20, fontWeight: '700' }}>
            비밀번호
          </Text>
          <ItemInput
            title={'비밀번호 입력'}
            type={'password'}
            value={password}
            error={passwordError}
            setFunc={setPassword}
          />
        </Form>
        <Text
          style={{
            marginTop: 5,
            marginBottom: 20,
            marginLeft: 20,
            fontSize: 12,
          }}
        >
          {`'회원가입'을 누름으로써\n커리어리의 이용약관과 개인정보처리 방침에 동의합니다`}
        </Text>
        <ButtonItem title="이메일로 시작하기" />

        <View style={{ flex: 1 }}>
          <Text style={{ marginleft: 10, marginTop: 10 }}>고객센터</Text>
          <Text
            style={{
              color: 'pink',
              textAlign: 'right',
              position: 'absolute',
              marginTop: 10,
              marginLeft: 340,
            }}
          >
            로그인하기
          </Text>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 60,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  title2: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },

  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },

  snsSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#4667A5',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 380,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'pink',
  },
});
