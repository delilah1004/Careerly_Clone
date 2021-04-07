import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

// 완료
export async function getFollower(userId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/follow/follower/' + userId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    return response.data.result.follower;
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function getFollowing(userId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/follow/following/' + userId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    return response.data.result.following;
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

// followerId == 팔로우할 회원의 Id(memberId) ? 나의 아이디?(userId)
export async function follow(memberId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'post',
      url: host + '/follow',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        followerId: memberId,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function unFollow(userId, memberId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'delete',
      url: host + '/follow',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        userEmail: userId,
        memberEmail: memberId,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}
