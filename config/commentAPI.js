import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function createComment(postId, content) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/comment/' + postId,
      header: await AsyncStorage.getItem('session'),
      data: {
        content: content,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function getCommentList(postId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/comment/' + postId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

// id? 댓글 아이디?
export async function updateComment(postId, commentInfo) {
  try {
    const response = await axios({
      method: 'patch',
      url: host + '/comment/' + postId,
      header: await AsyncStorage.getItem('session'),
      data: {
        commentInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function deleteComment(commentId) {
  try {
    const response = await axios({
      method: 'delete',
      url: host + '/comment',
      header: await AsyncStorage.getItem('session'),
      data: {
        id: commentId,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
