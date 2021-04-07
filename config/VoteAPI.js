import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function getVoteList() {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/vote',
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

export async function createVote(
  subject,
  content,
  choice1,
  choice2,
  navigation
) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'post',
      url: host + '/vote',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        subject: subject,
        content: content,
        choice1: choice1,
        choice2: choice2,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function readVote(voteId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/vote/' + voteId,
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

export async function updateVote(voteId, voteInfo) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'patch',
      url: host + '/vote/' + voteId,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        vote: voteInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    const error = err.response.data.error || err.message;

    Alert.alert(error);
  }
}

export async function readVoteResult(voteId) {
  try {
    const token = await AsyncStorage.getItem('session');
    const response = await axios({
      method: 'get',
      url: host + '/vote/result/' + voteId,
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
