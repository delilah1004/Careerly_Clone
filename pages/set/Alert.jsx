import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { Container, Text, Content } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

import HeaderBack from '../../components/header/HeaderBack';

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

const styles = StyleSheet.create({});
