import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, View, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const containerWidth = Dimensions.get('window').width / 3;

export default function HeaderPostSave({
  navigation,
  title,
  buttonTitle,
  upload,
}) {
  return (
    <Header style={styles.header} transparent>
      <View style={styles.container}>
        <Button
          style={styles.back}
          transparent
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" color="grey" size={26} />
        </Button>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => upload()}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#EEE',
    alignItems: 'center',
  },
  container: {
    width: containerWidth,
  },
  back: {
    marginStart: 15,
  },
  title: {
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ED6653',
    opacity: 0.5,
    width: 70,
    height: 30,
    marginEnd: 15,
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
});
