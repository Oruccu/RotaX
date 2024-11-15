import { Text, View } from "react-native";
import React, { Component } from "react";
import LottieView from 'lottie-react-native';
import styles from './ErrorStyles';
export default function Error() {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/LottieView/Error.json')}
      />
      </View>
  );
}
