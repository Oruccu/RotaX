
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Ekranı tamamen kapsamasını sağlar
    justifyContent: "flex-start", // Üstten hizalamak için
    alignItems: "center", // Yatayda ortalar
    paddingTop: 5, // Üstten biraz boşluk ekler

  },
  searchContainer: {
    width: "100%", // Yüzde 100 genişlik
    paddingHorizontal: 10, // Kenarlardan boşluk
  },
  inputContainer: {
    marginBottom: 5, // Arama çubuğu ile buton arasına boşluk
    padding:10,
  },
  input: {
    height: 40,
    borderColor: "#0077b6",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "#0077b6", // Buton arka plan rengi
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "white", // Yazı rengi beyaz
    fontSize: 20,
  },

});
