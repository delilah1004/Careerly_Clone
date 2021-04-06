import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function createPost(content, url) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/post',
      header: await AsyncStorage.getItem('session'),
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

export async function getPostList(pageNum) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/post',
      header: await AsyncStorage.getItem('session'),
      params: {
        page: pageNum,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function readPost(postId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/page/' + postId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getRecommenderList(postId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/page/' + postId + '.recommend',
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getUserPostList(userId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/post/user/' + userId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getUserRecommendPostList(userId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/post/recommend/' + userId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updateRecommend(postId) {
  try {
    const response = await axios({
      method: 'patch',
      url: host + '/post/recommend/' + postId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function sharePost(postId) {
  try {
    const response = await axios({
      method: 'patch',
      url: host + '/post/share/' + postId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updatePost(postId, content, url) {
  try {
    const response = await axios({
      method: 'patch',
      url: host + '/post/' + postId,
      header: await AsyncStorage.getItem('session'),
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
    const response = await axios({
      method: 'delete',
      url: host + '/post/' + postId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
