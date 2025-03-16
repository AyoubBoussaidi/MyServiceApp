import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BottomNavigation = ({ activeTab }) => {
  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Calendar', icon: 'calendar' },
    { name: 'Wallet', icon: 'wallet' },
    { name: 'Profile', icon: 'user' },
  ];

  return (
    <View style={styles.bottomNavContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.navItem,
            activeTab === tab.name.toLowerCase() ? styles.activeNavItem : {},
          ]}
        >
          <FontAwesome
            name={tab.icon}
            size={24}
            color={activeTab === tab.name.toLowerCase() ? '#3498db' : '#999'}
          />
        </TouchableOpacity>
      ))}
      <View style={styles.navIndicator} />
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
  navIndicator: {
    height: 2,
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
