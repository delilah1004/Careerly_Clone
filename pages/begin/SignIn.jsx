import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Form, View } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';
import InputItem from '../../components/InputItem';
import ButtonItem from '../../components/ButtonItem';
import TextButton from '../../components/TextButton';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <HeaderBack title={'로그인'} navigation={navigation} />

      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem title="이메일" />
          <InputItem title="비밀번호" />
        </Form>

        <ButtonItem
          style={{ marginTop: 20 }}
          title="로그인"
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
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
