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
        KoPub_light: require('./assets/fonts/KoPubWorld Dotum Light.ttf'),
        KoPub_medium: require('./assets/fonts/KoPubWorld Dotum Medium.ttf'),
        KoPub_bold: require('./assets/fonts/KoPubWorld Dotum Bold.ttf'),
        Malgun_sl: require('./assets/fonts/MALGUNSL.TTF'),
        Malgun: require('./assets/fonts/MALGUN.TTF'),
        Malgun_bold: require('./assets/fonts/MALGUNBD.TTF'),
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
    <Loading />
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
