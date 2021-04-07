import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function createPost(navigation, content, url) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'post',
      url: host + '/post',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        content: content,
        url: url,
      },
    });

    if (response.data.success) {
      await Alert.alert('업로드 완료!');
      navigation.goBack();
    } else {
      Alert.alert('업로드 실패');
    }
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function getPostList(pageNum) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/post',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        page: pageNum,
      },
    });

    return response.data.result;
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function readPost(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/page/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getRecommenderList(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/page/' + postId + '.recommend',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getUserPostList(userId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/post/user/' + userId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getUserRecommendPostList(userId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/post/recommend/' + userId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updateRecommend(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'patch',
      url: host + '/post/recommend/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function sharePost(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'patch',
      url: host + '/post/share/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updatePost(postId, content, url) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'patch',
      url: host + '/post/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        content: content,
        url: url,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function deletePost(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'delete',
      url: host + '/post/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
