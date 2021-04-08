import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

// 완료
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

// 완료
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

// 완료
export async function getNextData(pageNum, setPageNum) {
  try {
    console.log('현재 page 번호: ' + pageNum);

    let data = await getPostList(pageNum);

    if (data.length !== 0) {
      setPageNum(pageNum + 1);
      return data;
    } else {
      return 0;
    }
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
    return false;
  }
}

// 완료
export async function readPost(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/post/' + postId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    return response.data.result;
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function recommendPost(postId) {
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function unRecommendPost(postId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'delete',
      url: host + '/post/recommend/' + postId,
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

    return response.data.success;
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
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
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}
