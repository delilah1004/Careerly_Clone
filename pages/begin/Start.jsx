import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, View } from 'native-base';

import ButtonItem from '../../components/ButtonItem';
import TextButton from '../../components/TextButton';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function Start({ navigation }) {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>가입하고 커리어리를</Text>
          <Text style={styles.titleText}>무료로 이용하세요</Text>
        </View>

        <View>
          <ButtonItem
            title="이메일로 시작하기"
            navigation={navigation}
            page={'SignUp'}
          />

          <View style={styles.textButtonContainer}>
            <TextButton
              title={'고객센터'}
              navigation={navigation}
              page={'ServiceCenter'}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <Text style={{ fontSize: 12 }}>이미 회원이신가요? </Text>
              <TextButton
                title={'로그인하기'}
                navigation={navigation}
                page={'SignIn'}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginTop: getStatusBarHeight(),
    paddingVertical: 30,
    justifyContent: 'space-between',
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
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
