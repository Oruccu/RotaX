import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  titleContainer: {
    backgroundColor: "#0077b6",
    flexDirection: "row", // İkon ve metni yan yana gösterir
    alignItems: "center", // İkon ve metni dikeyde ortalar
    padding: 2,
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "white",
  },
});
