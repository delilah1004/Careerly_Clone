import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

export default function RoleCategory({ title, setRole, currentRole }) {
  if (title == currentRole) {
    return (
      <TouchableOpacity
        style={[styles.box, styles.activeBox]}
        onPress={() => {
          setRole(title);
        }}
      >
        <Text style={[styles.text, styles.activeText]}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.box, styles.defaultBox]}
        onPress={() => {
          setRole(title);
        }}
      >
        <Text style={[styles.text, styles.defaultText]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    marginEnd: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultBox: {
    backgroundColor: '#EEE',
  },
  activeBox: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 15,
  },
  defaultText: {
    color: '#555',
  },
  activeText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
