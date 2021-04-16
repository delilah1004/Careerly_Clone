import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

// 완료
export async function createComment(postId, content) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'post',
      url: host + '/comment/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        content: content,
      },
    });

    return response.data.success;
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function getCommentList(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/comment/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

// id? 댓글 아이디?
export async function updateComment(postId, commentInfo) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'patch',
      url: host + '/comment/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        commentInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function deleteComment(commentId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'delete',
      url: host + '/comment',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        id: commentId,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}
