import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import {
  Container,
  Form,
  Textarea,
  Text,
  View,
  Item,
  Input,
  Header,
  Button,
  Content,
  Thumbnail,
  Icon,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import HeaderSave from '../../components/header/HeaderSave';
import InputItem from '../../components/begin/InputItem';
import * as ImagePicker from 'expo-image-picker';

const icon = require('../../assets/profileicon.png');
export default function ProfileUpdate({ navigation }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');

  const ProfileUpdate = () => {
    if (email == '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }
    if (number == '') {
      setNumberError('휴대폰 번호를 입력해주세요');
      return false;
    } else {
      setNumberError('');
    }
  };
  useEffect(() => {
    getPermission();
  }, []);
  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('게시글을 업로드하려면 사진첩 권한이 필요합니다.');
      }
    }
  };
  const pickImage = async () => {
    console.log('이미지 선택');
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    getImageUrl(imageData);
  };

  const [imageUri, setImageUri] = useState('');

  const getImageUrl = async (imageData) => {
    const response = await fetch(imageData.uri);
    const blob = await response.blob();
    setImageUri(imageData.uri);
  };
  return (
    <Container>
      <HeaderSave navigation={navigation} title={'프로필 편집'} />
      <ScrollView style={styles.container}>
        {imageUri == '' || imageUri == undefined ? (
          <TouchableOpacity onPress={() => pickImage()}>
            <Thumbnail large source={icon} style={{ alignSelf: 'center' }} />
          </TouchableOpacity>
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={styles.imagePreview}
            onPress={() => pickImage()}
          />
        )}
        <Form style={styles.form}>
          <InputItem title={'이름 *'} hint={'이름 입력'} type={'name'} />
          <InputItem title={'직함'} hint={'직함 입력'} type={'carrer'} />
          <Text style={styles.label}>
            자기 소개
            <Text
              style={{ fontSize: 12, color: '#999999' }}
            >{`  최대 글자 수 150자`}</Text>
          </Text>

          <Textarea
            rowSpan={6}
            bordered
            placeholder="본인을 소개해보세요."
            style={{ borderRadius: 5 }}
          />
        </Form>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#999999',
            marginBottom: 18,
          }}
        >
          <Text style={styles.label}>경력</Text>
        </View>
        <InputItem title={'회사'} hint={'회사 이름을 입력해주세요.'} />
        <InputItem title={'직함'} hint={'직함을 입력해주세요.'} />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#999999',
            marginBottom: 18,
          }}
        >
          <Text style={styles.label}>학력</Text>
        </View>
        <InputItem title={'학교'} hint={'학교 이름을 입력하세요'} />
        <InputItem
          title={'전공'}
          hint={'전공을 입력해주세요.(ex:경영학과 학사)'}
        />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  form: {
    marginVertical: 10,
  },
  terms: {
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 12,
    color: 'grey',
  },
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  imagePreview: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
