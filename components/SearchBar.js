import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search..." 
          style={styles.searchInput} 
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 , height: 60},
  searchInputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', borderRadius: 8, paddingHorizontal: 10, flex: 1 },
  searchIcon: { marginRight: 5 },
  searchInput: { flex: 1, height: 40 },
  filterButton: { marginLeft: 10, padding: 10 },
});
