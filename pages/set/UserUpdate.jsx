import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Form, Text, View } from 'native-base';

import Loading from '../Loading';

import HeaderBack from '../../components/header/HeaderBack';
import InputItem from '../../components/InputItem';

import { updateUserInfo, getUserInfo } from '../../config/UserAPI';

export default function UserUpdate({ navigation }) {
  const [ready, setReady] = useState(false);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const update = async () => {
    await updateUserInfo(email, phone, navigation);
  };

  useEffect(() => {
    setTimeout(() => {
      getUserEmail();
      setReady(true);
    });
  }, []);

  const getUserEmail = async () => {
    const result = await getUserInfo();
    setEmail(result.email);
  };

  let showButton = () => {
    if (email == '') {
      return (
        <TouchableOpacity disabled style={[styles.button, styles.disabled]}>
          <Text style={styles.text}>계정정보 변경하기</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.button, styles.active]}
          onPress={() => {
            update();
          }}
        >
          <Text style={styles.text}>계정정보 변경하기</Text>
        </TouchableOpacity>
      );
    }
  };

  return ready ? (
    <Container>
      <HeaderBack navigation={navigation} title={'계정 정보 변경하기'} />
      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem
            title={'이메일'}
            hint={'이메일 입력'}
            type={'email'}
            value={email}
            setFunc={setEmail}
          />
          <InputItem
            title={'휴대폰 번호'}
            hint={'휴대폰 번호 입력'}
            type={'phone'}
            value={phone}
            setFunc={setPhone}
          />
        </Form>

        {showButton()}
      </View>
    </Container>
  ) : (
    <Loading />
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
  active: {
    opacity: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: 'white',
  },
});
