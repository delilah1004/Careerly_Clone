import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Container, Text, View } from 'native-base';

import HeaderBack from '../../components/header/HeaderBack';

export default function ServiceCenter({ navigation }) {
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'무엇이든 물어보세요!'} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
          준비중입니다
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({});
