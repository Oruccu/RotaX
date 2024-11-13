import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import debounce from 'lodash.debounce';  
import styles from "./SearchInputStyles";

interface SearchInputProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearch: (address: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ address, setAddress, debouncedSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adres veya konum girin (örneğin, Ankara)"
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => debouncedSearch(address)}
      >
        <Text style={styles.buttonText}>Konumu Bul</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
