import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import styles from "./HomeStyles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Home</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Image/RotaaX.png")}
        />
      </View>
    </View>
  );
}
