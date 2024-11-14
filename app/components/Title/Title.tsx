// components/Title.tsx
import React from 'react';
import { Text, View } from 'react-native';
import styles from './TitleStyles';

const Title: React.FC = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>RotaX</Text>
  </View>
);

export default Title;
