import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {
  Container,
  Form,
  Textarea,
  Text,
  View,
  Item,
  Input,
} from 'native-base';

import HeaderPostSave from '../../components/header/HeaderPostSave';

import { Entypo } from '@expo/vector-icons';

import { createPost } from '../../config/PostAPI';

export default function PostCreate({ navigation }) {
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const upload = async () => {
    if (content == '') {
      Alert.alert('내용을 입력해주세요');
      return false;
    }

    let result = await createPost(content, url, navigation);
    if (result) {
      await Alert.alert('업로드 완료');
      setContent('');
      setUrl('');
    } else {
      Alert.alert('업로드 실패');
    }
  };

  return (
    <Container>
      <HeaderPostSave navigation={navigation} upload={upload} />
      <Form style={styles.form}>
        <Text style={styles.label}>내용</Text>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={10}
            borderRadius={8}
            bordered
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholder="함께 나누고 싶은 생각을 적어주세요"
            placeholderTextColor="gray"
          />
        </Form>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>
            URL<Text style={{ color: 'gray', marginLeft: 5 }}>(선택)</Text>
          </Text>
          <Item regular style={styles.url}>
            <Input
              placeholder="공유할 URL을 입력해주세요"
              placeholderTextColor="gray"
              placeholderFontSize={10}
              value={url}
              onChangeText={(text) => setUrl(text)}
            />
          </Item>
        </View>
      </Form>
      <View
        style={{
          marginLeft: 15,
          marginTop: 30,
          marginBottom: 20,
          width: '90%',
          backgroundColor: 'rgba(52, 52, 52, 0.05)',
          height: 50,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            width: 350,
            color: 'black',
          }}
        >
          💡 프로필을 입력한 사람의 평균 팔로워 수가 더 높아요.
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row', paddingTop: 125, paddingLeft: 10 }}
        onPress={() => {
          navigation.navigate('VoteCreate');
        }}
      >
        <Entypo name="list" size={24} color="green" />
        <Text style={{ marginLeft: 10 }}>투표 만들기</Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    color: '#000',
  },
  url: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#EEE',
    alignItems: 'center',
  },
  back: {
    marginStart: 15,
  },
  title: {
    alignSelf: 'center',
  },
  button: {
    width: 70,
    height: 30,
    marginEnd: 15,
    backgroundColor: 'pink',
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
});
