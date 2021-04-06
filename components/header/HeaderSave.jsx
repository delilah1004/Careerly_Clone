import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, View, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const containerWidth = Dimensions.get('window').width / 3;

export default function HeaderSave({ navigation, title, save }) {
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
        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>저장하기</Text>
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
    width: 70,
    height: 30,
    marginEnd: 15,
    backgroundColor: '#ed6653',
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
