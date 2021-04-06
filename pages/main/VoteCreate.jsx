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

import { createVote } from '../../config/VoteAPI';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderVostSave from '../../components/header/HeaderVostSave';

export default function VoteCreate({ navigation }) {
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');

  const voteUpload = async () => {
    if (subject == '') {
      Alert.alert('내용을 입력해주세요');
      return false;
    }
    if (content == '') {
      Alert.alert('내용을 입력해주세요');
      return false;
    }

    let result = await createVote(
      subject,
      content,
      choice1,
      choice2,
      navigation
    );
    if (result) {
      await Alert.alert('업로드 완료');
      setContent('');
      setSubject('');
      setChoice1('');
      setChoice2('');
    } else {
      Alert.alert('업로드 실패');
    }
  };

  return (
    <ScrollView>
      <HeaderVostSave navigation={navigation} upload={voteUpload} />
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
            paddingLeft: 5,
            width: 350,
            color: 'black',
          }}
        >
          💡 투표는 등록일로부터 7일간 진행됩니다.
        </Text>
      </View>
      <Form style={styles.form}>
        <View>
          <Text style={styles.label}>투표주제</Text>
          <Item regular style={styles.url}>
            <Input
              placeholder="사람들에게 묻고 싶은 주제를 적어주세요."
              placeholderTextColor="gray"
              placeholderFontSize={10}
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
          </Item>
          <Text style={styles.label}>투표 설명</Text>
          <Form style={styles.contentLayout}>
            <Textarea
              rowSpan={6}
              borderRadius={5}
              bordered
              value={content}
              onChangeText={(text) => setContent(text)}
              placeholder=" 투표에 대한 자세한 설명을 적어주세요."
              placeholderTextColor="gray"
            />
          </Form>
          <Text style={styles.label}>투표 선택지 </Text>
          <Item regular style={styles.url}>
            <Input
              placeholder="선택지 1"
              placeholderTextColor="gray"
              placeholderFontSize={10}
              value={choice1}
              onChangeText={(text) => setChoice1(text)}
            />
          </Item>
          <Item regular style={styles.url}>
            <Input
              placeholder="선택지 2"
              placeholderTextColor="gray"
              placeholderFontSize={10}
              value={choice2}
              onChangeText={(text) => setChoice2(text)}
            />
          </Item>
        </View>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 5,
    color: '#000',
  },
  url: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  contentLayout: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
