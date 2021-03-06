import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Form, View, Text } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';
import InputItem from '../../components/InputItem';
import TextButton from '../../components/begin/TextButton';

import { signIn } from '../../config/UserAPI';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSignIn = () => {
    signIn(email, password, navigation);
  };

  const showButton = () => {
    if (email == '' || password == '') {
      return (
        <TouchableOpacity disabled style={[styles.button, styles.disabled]}>
          <Text style={styles.text}>이메일로 시작하기</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.button, styles.active]}
          onPress={doSignIn}
        >
          <Text style={styles.text}>이메일로 시작하기</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <Container>
      <HeaderBack title={'로그인'} navigation={navigation} />

      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem title="이메일" type={'email'} setFunc={setEmail} />
          <InputItem title="비밀번호" type={'password'} setFunc={setPassword} />
        </Form>

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
            <TextButton
              title={'비밀번호를 잊으셨나요?'}
              navigation={navigation}
              page={'PasswordFind'}
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
  form: {
    width: '100%',
    marginVertical: 10,
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
});
