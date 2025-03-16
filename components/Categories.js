import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CategoryItem from './Category'; // Make sure to import the CategoryItem component

const Categories = ({ categories }) => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.sectionTitle}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
        {categories.map((category, index) => (
          <CategoryItem 
            key={index}
            icon={category.icon}
            name={category.name}
            color={category.color}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesScroll: {
    flexDirection: 'row',
  },
});
