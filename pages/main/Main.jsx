import React, { useEffect } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { View, Text, Grid, Col, Container } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';

import VoteCard from '../../components/vote/VoteCard';
import MainCard from '../../components/main/MainCard';

const WindowWidth = Dimensions.get('window').width;
const ThumbSize = WindowWidth * 0.12;

export default function Main({ navigation }) {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <Container style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'rgba(52, 52, 52, 0.1)',
        }}
      >
        {/* 투표 */}
        <ScrollView
          style={{ marginVertical: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.voteList}>
            <VoteCard navigation={navigation} vote={''} />
            <VoteCard navigation={navigation} vote={''} />
            <VoteCard navigation={navigation} vote={''} />
          </View>
        </ScrollView>

        {/* 글쓰기 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PostCreate');
          }}
        >
          <Grid style={styles.createBox}>
            <Col size={2}>
              <FontAwesome
                style={{ alignSelf: 'center' }}
                name="user-circle-o"
                size={ThumbSize}
                color="#C7C7C7"
              />
            </Col>
            <Col size={8}>
              <Text
                style={{
                  fontSize: 15,
                  backgroundColor: '#F7F7F7',
                  color: '#AAA',
                  padding: 18,
                  borderRadius: 5,
                }}
              >
                함께 나누고 싶은 생각이 있으신가요?
              </Text>
            </Col>
          </Grid>
        </TouchableOpacity>

        {/* 글 목록 */}
        <MainCard navigation={navigation} />
        <MainCard navigation={navigation} />
        <MainCard navigation={navigation} />
        <MainCard navigation={navigation} />
        <MainCard navigation={navigation} />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  voteList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
  },
  createBox: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    paddingVertical: 15,
    paddingLeft: 5,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
