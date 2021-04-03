import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Text } from 'native-base';

export default function ItemInput({ title, hint, type, setFunc, error }) {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Item regular style={{ alignSelf: 'center', borderRadius: 5 }}>
        <Input
          style={styles.input}
          placeholder={hint}
          color="black"
          //type이 패스워드면 화면상에 텍스트가 안보이게 처리하는 속성
          secureTextEntry={type == 'password' ? true : false}
          //태그에 값이 입력되는 동시에 어떤 값이 입력되는 지 바로바로 뱉는 속성함수
          onChangeText={(text) => {
            setFunc(text);
          }}
        />
      </Item>
      <Item style={{ borderColor: 'transparent' }}>
        <Text style={{ color: 'tomato' }}>{error}</Text>
      </Item>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    color: '#fff',
    alignSelf: 'center',
  },
});
