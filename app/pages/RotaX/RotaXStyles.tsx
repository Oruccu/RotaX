import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Ekranı tamamen kapsamasını sağlar
    justifyContent: "flex-start", // Üstten hizalamak için
    alignItems: "center", // Yatayda ortalar
    paddingTop: 5, // Üstten biraz boşluk ekler
  },
  searchContainer: {
    flexDirection: "row", // TextInput ve Icon'ı yatay olarak hizala
    alignItems: "center", // Yatay hizalama
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#0077b6",
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: "#0077b6",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: "#fff",
  },
  mapContainer: {
    flex: 1,
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
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
