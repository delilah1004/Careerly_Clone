import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

export default function TextButton({ title, navigation, page }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(page);
      }}
    >
      <Text
        style={page === 'SignIn' ? styles.textButtonRed : styles.textButton}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  textButtonRed: {
    color: '#ed6653',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
