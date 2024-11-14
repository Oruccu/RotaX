// components/SearchBar.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SearchBarStyles';

interface SearchBarProps {
  address: string;
  onChangeAddress: (text: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ address, onChangeAddress, onSearch }) => (
  <View style={styles.searchContainer}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adres veya konum girin (örneğin, Ankara)"
        onChangeText={onChangeAddress}
        value={address}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={onSearch}>
      <Icon name="location-arrow" size={25} color="#0077b6" />
    </TouchableOpacity>
  </View>
);

export default SearchBar;
