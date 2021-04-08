import React, { useState } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, View, Text } from 'native-base';

import RoleCategory from '../../components/begin/RoleCategory';

import data from '../../config/mock/data.json';

import { register } from '../../config/UserAPI';

export default function RolePick({ navigation, route }) {
  const category = data.category;
  const info = route.params.currentUser;
  const [role, setRole] = useState('');

  const doSignUp = () => {
    console.log(info.name, info.email, info.password, role);
    register(info.name, info.email, info.password, role, navigation);
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.title}>어떤 분야에서 일하고 계신가요?</Text>
        <Text style={styles.desc}>
          현재 일하고 있는 분야와 가장 밀접한 분야 1가지만 골라주세요.
        </Text>
        <View style={styles.categoryContainer}>
          {category.map((title) => {
            return (
              <RoleCategory
                title={title}
                setRole={setRole}
                currentRole={role}
              />
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.button, styles.active]}
          onPress={doSignUp}
        >
          <Text style={styles.text}>프로필 완료!</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginTop: getStatusBarHeight(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  desc: {
    color: '#777',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#ed6653',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    opacity: 1,
  },
  text: {
    color: 'white',
  },
});
