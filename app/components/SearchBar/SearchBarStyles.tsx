// components/SearchBarStyles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row', // İki bileşeni yan yana yerleştirir
    alignItems: 'center', // Dikeyde ortalamak için
    padding: 10,
  },
  inputContainer: {
    flex: 1, // TextInput'un kalan alanı kaplamasını sağlar
    marginRight: 10, // TextInput ile buton arasında boşluk bırakır
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 5,
  },
  button: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default styles;
