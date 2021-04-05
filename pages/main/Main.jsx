import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';

import VoteCard from '../../components/vote/VoteCard';
import MainCard from '../../components/main/MainCard';

export default function Main({ navigation }) {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
      }}
    >
      <ScrollView style={{ marginTop: 50, maxHeight: 210 }} horizontal={true}>
        <VoteCard navigation={navigation} />
        <VoteCard navigation={navigation} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PostCreate');
        }}
      >
        <View
          style={{
            marginLeft: 5,
            marginTop: 30,
            marginBottom: 20,
            width: 400,
            backgroundColor: '#FFF',
            height: 80,
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 20,
          }}
        >
          <FontAwesome
            style={{ marginLeft: 25 }}
            name="user-circle-o"
            size={35}
            color="black"
          />
          <Text
            style={{
              marginLeft: 80,
              padding: 15,
              position: 'absolute',
              textAlign: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0.05)',
              width: 280,
              color: 'gray',
            }}
          >
            함께 나누고 싶은 생각이 있나요?
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <MainCard navigation={navigation} />
        <MainCard navigation={navigation} />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardItem: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
