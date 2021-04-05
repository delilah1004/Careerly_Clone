import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Switch } from 'react-native';
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
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Foundation,
  Ionicons,
  Fontisto,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  AntDesign,
} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HeaderBack from '../../components/header/HeaderBack';
import TextButton from '../../components/TextButton';

const containerWidth = Dimensions.get('window').width / 3;

export default function Alerte({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <HeaderBack navigation={navigation} title={'알림 설정하기'} />
      <Content style={{ marginTop: 30 }}>
        <Grid>
          <Col
            size={4}
            style={{
              height: 50,
              marginBottom: 30,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginLeft: 25,
                fontSize: 16,
                color: '#BFBFBF',
              }}
            >
              하루 두번, 꼭 필요한 소식을 보내드려요.
            </Text>
          </Col>
        </Grid>

        <Grid>
          <Col
            size={4}
            style={{
              height: 50,
              marginBottom: 30,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginLeft: 15,
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              푸시 알림 설정
            </Text>
          </Col>
          <Col size={1} style={{ height: 50 }}>
            <Switch
              trackColor={{ false: '#767577', true: '#44ADA4' }}
              thumbColor={isEnabled ? '#008275' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Col>
        </Grid>
      </Content>
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
    marginTop: '100',
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
  container: {
    width: containerWidth,
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
