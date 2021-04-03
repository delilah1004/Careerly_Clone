import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';

import * as Font from 'expo-font';

export default function App() {
  console.disableYellowBox = true;
  const [ready, setReady] = useState(true);

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        // 본문 Font
        KoPub_light: require('./assets/fonts/KoPubWorld Dotum Light.ttf'),
        KoPub_medium: require('./assets/fonts/KoPubWorld Dotum Medium.ttf'),
        KoPub_bold: require('./assets/fonts/KoPubWorld Dotum Bold.ttf'),
        // 제목 및 굵은 글씨 Font
        // 맑은 고딕 에러 (미해결)
        // Malgun_sl: require('./assets/fonts/MALGUNSL.TTF'),
        // Malgun: require('./assets/fonts/MALGUN.TTF'),
        // Malgun_bold: require('./assets/fonts/MALGUNBD.TTF'),
        // 숫자 관련 Font
        Spoqa_thin: require('./assets/fonts/SpoqaHanSansNeo-Thin.ttf'),
        Spoqa_light: require('./assets/fonts/SpoqaHanSansNeo-Light.ttf'),
        Spoqa_medium: require('./assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
        Spoqa_regular: require('./assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
        Spoqa_bold: require('./assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
        ...Ionicons.font,
      });
      await setReady(true);
    }, 1000);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return ready ? (
    <NavigationContainer>
      <StatusBar backgroundColor="grey" style="light" />
      <StackNavigator />
    </NavigationContainer>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({});
