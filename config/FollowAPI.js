import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function getFollower(userId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/follow/follower/' + userId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getFollowing(userId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/follow/following/' + userId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

// followerId == 팔로우할 회원의 Id(memberId) ? 나의 아이디?(userId)
export async function follow(memberId) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/follow',
      header: await AsyncStorage.getItem('session'),
      data: {
        followerId: memberId,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function unFollow(userId, memberId) {
  try {
    const response = await axios({
      method: 'delete',
      url: host + '/follow',
      header: await AsyncStorage.getItem('session'),
      data: {
        userEmail: userId,
        memberEmail: memberId,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
