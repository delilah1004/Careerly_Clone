import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

export default function CategoryButton({ title, setFunc }) {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.box, active ? styles.activeBox : styles.defaultBox]}
      onPress={() => {
        setActive(true);
        setFunc(title);
      }}
    >
      <Text
        style={[styles.text, active ? styles.activeText : styles.defaultText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
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
