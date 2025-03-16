import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryItem = ({ icon, name, color }) => {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={[styles.categoryIcon, { backgroundColor: color }]}>
        {icon}
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    margin: 6,
    padding: 6,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
