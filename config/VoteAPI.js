import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const host = 'http://52.79.227.130';

export async function getVoteList() {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/vote',
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function createVote(voteInfo) {
  try {
    const response = await axios({
      method: 'post',
      url: host + '/vote',
      header: await AsyncStorage.getItem('session'),
      data: {
        vote: voteInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function readVote(voteId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/vote/' + voteId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function updateVote(voteId, voteInfo) {
  try {
    const response = await axios({
      method: 'patch',
      url: host + '/vote/' + voteId,
      header: await AsyncStorage.getItem('session'),
      data: {
        vote: voteInfo,
      },
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}

export async function readVoteResult(voteId) {
  try {
    const response = await axios({
      method: 'get',
      url: host + '/vote/result/' + voteId,
      header: await AsyncStorage.getItem('session'),
    });

    console.log(response.data);
  } catch (err) {
    Alert.alert('Error! => ', err.message);
  }
}
