import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function emailCheck(name, email, password, navigation) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/checkEmail',
      data: {
        email: email,
      },
    });

    let data = {
      name: name,
      email: email,
      password: password,
    };

    if (response.data.success) {
      navigation.navigate('RolePick', { data });
    } else {
      Alert.alert('이미 존재하는 이메일입니다!');
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

export async function register(name, email, password, role, navigation) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/register',
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });

    if (response.data.success) {
      Alert.alert('회원가입 성공!');
      navigation.navigate('SignIn');
    } else {
      Alert.alert('회원가입 실패');
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/login',
      data: {
        email: email,
        password: password,
      },
    });

    const token = response.data.result.user.token;
    await AsyncStorage.setItem('session', token);

    Alert.alert('로그인 성공!');
    navigation.push('TabNavigator');
  } catch (err) {
    Alert.alert('로그인에 문제가 있습니다! ', err.message);
  }
}

export async function signOut(navigation) {
  try {
    await AsyncStorage.clear();

    Alert.alert('로그아웃!');
    navigation.push('Start');
  } catch (err) {
    Alert.alert('로그인에 문제가 있습니다! ', err.message);
  }
}
