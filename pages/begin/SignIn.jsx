import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Text, Button, Container, Form, View } from 'native-base';

import HeaderBack from '../../components/HeaderBack';
import InputItem from '../../components/InputItem';
import ButtonItem from '../../components/ButtonItem';

const formWidth = Dimensions.get('window').width;

export default function SignIn({ navigation }) {
  return (
    <Container>
      <HeaderBack title={'로그인'} />
      <View style={styles.container}>
        <Form style={styles.form}>
          <InputItem title="이메일" />
          <InputItem title="비밀번호" />
        </Form>
        <ButtonItem title="로그인" />
        <Button
          style={{ alignSelf: 'center', marginTop: 30 }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <Text>회원가입</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    width: formWidth,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
});
