import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Up to 50% Off!',
      subtitle: 'Book Now to Avail the Offer',
      buttonText: 'Book an Offer Now',
      image: 'https://example.com/cleaning-person.jpg' 
    },
    {
      title: 'Spring Cleaning Sale',
      subtitle: 'Professional Services at Discount',
      buttonText: 'Explore Services',
      image: 'https://example.com/cleaning-service.jpg'
    },
    {
      title: 'Refer & Earn',
      subtitle: 'Get $10 Off on Your Next Booking',
      buttonText: 'Refer a Friend',
      image: 'https://example.com/referral.jpg'
    }
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.slideContent}>
              <View style={styles.slideTextContainer}>
                <Text style={styles.slideTitle}>{slide.title}</Text>
                <Text style={styles.slideSubtitle}>{slide.subtitle}</Text>
                <TouchableOpacity style={styles.slideButton}>
                  <Text style={styles.slideButtonText}>{slide.buttonText}</Text>
                </TouchableOpacity>
              </View>
              
              <Image 
                source={require('../assets/img1.jpg')} 
                style={styles.slideImage} 
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
      </ScrollView>
      
      
     {/*  <View style={styles.dotsContainer}>
        {slides.map((_, dotIndex) => (
          <View 
            key={dotIndex} 
            style={[styles.dot, dotIndex === activeIndex ? styles.activeDot : {}]} 
          />
        ))}
      </View> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  slide: {
    width: width - 60,
    height: 120,
    marginHorizontal: 10,
    backgroundColor: '#E9F8FF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  slideContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    height: '100%',
  },
  slideTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  slideSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  slideButton: {
    backgroundColor: '#FFAB2D',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  slideButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  slideImage: {
    width: 110,
    height: 110,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#39B4F0',
    width: 16,
  },
});