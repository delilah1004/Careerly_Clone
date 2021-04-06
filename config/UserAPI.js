import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function signOut(navigation) {
  try {
    await AsyncStorage.clear();

    Alert.alert('로그아웃!');
    navigation.push('Start');
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
      navigation.push('SignIn');
    } else {
      Alert.alert('회원가입 실패');
    }
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function checkEmail(name, email, password, navigation) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/checkEmail',
      data: {
        email: email,
      },
    });

    let currentUser = {
      name: name,
      email: email,
      password: password,
    };

    if (response.data.success) {
      navigation.push('RolePick', { currentUser });
    } else {
      Alert.alert('이미 존재하는 이메일입니다!');
    }
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function getMemberListByName(name, pageNum) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/member',
      header: await AsyncStorage.getItem('session'),
      params: {
        search: name,
        page: pageNum,
      },
    });

    // console.log(response.data.result);
    return response.data.result;
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getMemberListByCategory(category, pageNum) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/member',
      header: await AsyncStorage.getItem('session'),
      params: {
        category: category,
        page: pageNum,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getMemberInfo(userId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/user/' + userId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getUserInfo() {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/user',
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updateUserInfo(userInfo) {
  try {
    const response = await axios({
      method: 'put',
      url: host + '/user',
      header: await AsyncStorage.getItem('session'),
      data: {
        userInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function findPassword(email) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/password',
      header: await AsyncStorage.getItem('session'),
      data: {
        email: email,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updatePassword(email) {
  try {
    const response = await axios({
      method: 'put',
      url: host + '/password',
      header: await AsyncStorage.getItem('session'),
      data: {
        email: email,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
