import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label, Icon, Text } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
export default function ItemInput({ title, type, setFunc, error }) {
  return (
    <>
      <Item regular style={{ width: 380, borderRadius: 10 }}>
        <Label style={styles.label}></Label>
        <Input
          style={styles.input}
          placeholder={title}
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
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
});
