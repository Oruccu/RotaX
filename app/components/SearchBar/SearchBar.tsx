// components/SearchBar.tsx
import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./SearchBarStyles";

interface SearchBarProps {
  value: string;
  onChangeValue: (text: string) => void;
  onSearch: () => void;
  placeholder: string;
  iconName: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeValue,
  onSearch,
  placeholder,
  iconName,
}) => (
  <View style={styles.searchContainer}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeValue}
        value={value}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={onSearch}>
      <Icon name={iconName} size={25} color="#0077b6" />
    </TouchableOpacity>
  </View>
);

export default SearchBar;
