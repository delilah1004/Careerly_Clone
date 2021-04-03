import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        Malgun_sl: require('./assets/fonts/MALGUNSL.TTF'),
        Malgun: require('./assets/fonts/MALGUN.TTF'),
        Malgun_bold: require('./assets/fonts/MALGUNBD.TTF'),
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
    <View style={styles.container}>
      <Text>Open up App.jsx to start working on careerly!</Text>
      <StatusBar style="auto" />
    </View>
  ) : (
    <Loding />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
