/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import WebView from 'react-native-webview';

const App: () => Node = () => {
  const handleEpub = `
    alert(1);
    console.log(2);
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'file:///android_asset/epub.html'}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      style={{flex: 1}}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
