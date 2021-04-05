import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Text } from 'native-base';

export default function InputItem({ title, hint, type, setFunc }) {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Item
        regular
        style={{ alignSelf: 'center', borderRadius: 5, marginBottom: 20 }}
      >
        <Input
          style={styles.input}
          //type이 패스워드면 화면상에 텍스트가 안보이게 처리하는 속성
          secureTextEntry={type == 'password' ? true : false}
          placeholder={hint}
          onChangeText={(text) => {
            setFunc(text);
          }}
        />
      </Item>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    alignSelf: 'center',
  },
});
