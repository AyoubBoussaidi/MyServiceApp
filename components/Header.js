import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Slider from './Slider';


const Header = ({ userName, userImage, address }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfoContainer}>
        <Image source={userImage ? { uri: userImage } : require('../assets/icon.png')} style={styles.userImage} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="grid-outline" size={24} color="white" />
      </TouchableOpacity>
      </View>
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={16} color="white" />
        <Text style={styles.addressText}>{address}</Text>
        <Ionicons name="chevron-down" size={16} color="white" />
      </View>
      <SearchBar />
      <Slider />
    </View>
    
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    maxHeight: 320,
    backgroundColor: '#39B4F0',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  userInfoContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '114%',
    justifyContent: 'space-around'
  },
  userImage: { 
    width: 40, 
    height: 40, 
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
  textContainer: {
    marginLeft: 4,
  },
  welcomeText: { 
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '400',
  },
  userName: { 
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  addressContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginLeft: 20,
    marginTop: 10
  },
  addressText: { 
    color: 'white',
    fontSize: 12,
    marginHorizontal: 4,
  },
  menuButton: { 
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});