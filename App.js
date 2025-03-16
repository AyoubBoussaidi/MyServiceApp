import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import your components (Make sure these components exist in your project)
import Header from './components/Header';
import Categories from './components/Categories';
import PopularServices from './components/PopularServices';
import BottomNavigation from './components/BottomNav';

export default function App() {
  const userData = {
    name: 'Ayoub Boussaidi',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    address: '20220, Casablanca, Morocco'
  };

  const slideData = [
    {
      title: 'Up to 50% Off!',
      subtitle: 'Book Now to Avail the Offer',
      buttonText: 'Grab the Offer Now',
      image: 'https://img.freepik.com/free-photo/woman-with-cleaning-gloves-cleaning-products_23-2148498950.jpg'
    }
  ];

  const categoryData = [
    { 
      name: 'Salon & spa', 
      icon: <Ionicons name="cut-outline" size={24} color="white" />, 
      color: '#FFB347' 
    },
    { 
      name: 'Cleaning', 
      icon: <Ionicons name="leaf-outline" size={24} color="white" />, 
      color: '#A3DD82' 
    },
    { 
      name: 'Handyman', 
      icon: <Ionicons name="construct-outline" size={24} color="white" />, 
      color: '#FFD700' 
    },
    { 
      name: 'Healthcare', 
      icon: <Ionicons name="medical-outline" size={24} color="white" />, 
      color: '#3498db' 
    },
    { 
      name: 'Salon & spa', 
      icon: <Ionicons name="cut-outline" size={24} color="white" />, 
      color: '#8B7D6B' 
    }
  ];

  const serviceData = [
    {
      name: 'AC Cleaning at Home',
      description: 'Clean AC, save energy',
      price: 468,
      rating: 4.7,
      image: 'https://img.freepik.com/free-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg'
    },
    {
      name: 'Home Cleaning',
      description: 'Clean Home, feel fresh',
      price: 596,
      rating: 5,
      image: 'https://img.freepik.com/free-photo/young-man-cleaning-floor-with-vacuum-cleaner-home_1301-7582.jpg'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header 
          userName={userData.name}
          userImage={userData.image}
          address={userData.address}
        />
        <Categories categories={categoryData} />
        <PopularServices services={serviceData} />
      </ScrollView>
      <BottomNavigation activeTab="home" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  // Header styles
  headerContainer: {
    backgroundColor: '#3498db',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 14,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  addressText: {
    color: 'white',
    fontSize: 12,
    marginHorizontal: 5,
    flex: 1,
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Search styles
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  // Slider styles
  sliderContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  slide: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  slideTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  slideTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  slideSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  slideButton: {
    backgroundColor: '#FFB347',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  slideButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  slideImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#3498db',
    width: 16,
  },
  // Categories styles
  categoriesContainer: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesScroll: {
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 70,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
  },
  // Service card styles
  servicesContainer: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAllText: {
    color: '#999',
  },
});
 

