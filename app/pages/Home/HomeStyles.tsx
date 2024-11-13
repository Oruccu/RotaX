import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
  },
  image: {
    position: "absolute",
    bottom: 20, 
    right: 20, 
    width: 200, 
    height: 200, 
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
});

export default styles;
