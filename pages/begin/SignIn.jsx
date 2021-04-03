import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sigin In!</Text>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Text>회원가입</Text>
      </Button>
    </View>
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
});
