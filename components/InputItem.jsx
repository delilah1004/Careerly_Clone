import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Text } from 'native-base';

export default function InputItem({ title, error }) {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <Item regular style={{ alignSelf: 'center', borderRadius: 5 }}>
        <Input style={styles.input} />
      </Item>
      <Item style={{ borderColor: 'transparent' }}>
        <Text style={{ color: 'tomato' }}>{error}</Text>
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
  button: {
    alignSelf: 'center',
  },
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
