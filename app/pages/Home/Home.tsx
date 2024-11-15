import { Text, StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./HomeStyles";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  const [plan, setPlan] = useState<string>("");
  
  function Search() {
    console.log(plan);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <SearchBar
        value={plan}
        onChangeValue={setPlan}
        onSearch={Search}
        placeholder="Tatil Ara"
        iconName="search"
      />
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
