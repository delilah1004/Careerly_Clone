import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Form, Textarea, Text, View } from 'native-base';

import HeaderPostSave from '../../components/header/HeaderPostSave';

import { Entypo } from '@expo/vector-icons';

import { createPost } from '../../config/PostAPI';

export default function PostCreate({ navigation }) {
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const upload = async () => {
    // createPost(content, url);
    createPost(navigation, content, url);
  };

  return (
    <ScrollView>
      <Container>
        <HeaderPostSave
          navigation={navigation}
          title={'게시물 업로드'}
          buttonTitle={'업로드하기'}
          upload={upload}
        />

        <View style={styles.container}>
          <Form style={styles.form}>
            {/* 내용 */}
            <Text style={styles.label}>내용</Text>
            <Textarea
              style={styles.content}
              rowSpan={10}
              borderRadius={5}
              value={content}
              placeholder="함께 나누고 싶은 생각을 적어주세요"
              placeholderTextColor="#AAA"
              onChangeText={(text) => {
                setContent(text);
              }}
            />

            {/* URL */}
            <View style={styles.url}>
              <Text style={styles.label}>URL</Text>
              <Text style={{ color: 'gray', fontSize: 13 }}> (선택)</Text>
            </View>
            <Textarea
              style={styles.input}
              placeholder={'공유할 URL을 입력해주세요'}
              placeholderTextColor="#AAA"
              value={url}
              onChangeText={(text) => {
                setUrl(text);
              }}
            />
          </Form>

          {/* Tip */}
          <View style={styles.tip}>
            <Text>💡</Text>
            <Text style={{ marginRight: 10 }}>
              프로필을 입력한 사람의 평균 팔로워 수가 더 높아요.
            </Text>
          </View>

          {/* 투표 만들기 */}
          <TouchableOpacity
            style={{ flexDirection: 'row', marginTop: 100 }}
            onPress={() => {
              navigation.navigate('VoteCreate');
            }}
          >
            <Entypo name="list" size={24} color="#44ADA4" />
            <Text style={{ fontWeight: '700', marginLeft: 10 }}>
              투표 만들기
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
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
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 18,
    fontSize: 15,
    borderRadius: 5,
    borderWidth: 1,
    color: 'black',
    borderColor: '#DBDBDB',
    alignSelf: 'center',
  },
  url: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  tip: {
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  content: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#DBDBDB',
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
