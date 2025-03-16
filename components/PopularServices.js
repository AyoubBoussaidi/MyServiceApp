import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ServiceCard from './ServiceCard'; // Assuming you have a ServiceCard component

const PopularServices = ({ services }) => {
  return (
    <View style={styles.servicesContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Service</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularServices;

const styles = StyleSheet.create({
  servicesContainer: {
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#3498db',
    fontSize: 14,
  },
  servicesScroll: {
    flexDirection: 'row',
  },
});
