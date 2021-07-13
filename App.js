import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/globle/styles';
import SignInScreen from './src/screens/AuthScreens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
<StatusBar barStyle='light-content' backgroundColor={colors.statusBar} />
<SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
