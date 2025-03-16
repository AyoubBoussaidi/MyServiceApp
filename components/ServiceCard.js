import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServiceCard = ({ service }) => {
  return (
    <View style={styles.serviceCard}>
      <Image source={{ uri: service.image }} style={styles.serviceImage} />
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart-outline" size={20} color="#FF6B6B" />
      </TouchableOpacity>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.serviceDescription}>{service.description}</Text>
        <View style={styles.serviceDetails}>
          <Text style={styles.servicePrice}>
            ${service.price}
            <Text style={styles.priceUnit}>/hour</Text>
          </Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{service.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  serviceInfo: {
    padding: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  serviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceUnit: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#FFD700',
    marginLeft: 5,
  },
});
