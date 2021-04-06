import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

export default function ButtonItem({ title, navigation, page }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(page)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ed6653',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
