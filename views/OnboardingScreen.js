import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const OnboardingScreen = ({ navigation }) => {
  const slides = [
    {
      key: '1',
      title: 'Welcome to Our App!',
      text: 'Discover the best items and amazing deals!',
      image: 'https://i.ibb.co.com/Tq2DNWY/Colorful-splash-fun-quotes-instagram-story-1.png',
      backgroundColor: '#fff8e5',
    },
    {
      key: '2',
      title: 'Find Great Deals',
      text: 'Save more with exclusive offers and discounts!',
      image: 'https://i.ibb.co.com/WfZ838h/png-clipart-leaf-vegetable-vegetarian-cuisine-fruit-sketch-beautifully-fresh-vegetables-assorted-veg.png',
      backgroundColor: '#fbc841',
    },
    {
      key: '3',
      title: 'Shop with Ease',
      text: 'Fast, reliable, and secure transactions!',
      image: 'https://i.ibb.co.com/n7sVK4f/sayur-59178650f19273ee068b4567-removebg-preview.png',
      backgroundColor: '#fff8e5',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const renderSlide = (slide) => {
    return (
      <View key={slide.key} style={[styles.slide, { backgroundColor: slide.backgroundColor }]}>
        <Image source={{ uri: slide.image }} style={styles.image} />
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.text}>{slide.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderSlide(slides[currentSlide])}

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, index === currentSlide ? styles.activeDot : {}]} />
        ))}
      </View>

      {/* Navigation Button */}
      <View style={styles.buttonContainer}>
        {currentSlide === slides.length - 1 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Home')} // Navigate to the Tab Navigator (MainTabs)
          >
            <Text style={styles.buttonText}>Start Now</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleNext}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width, // Full screen width for each slide
    height, // Full screen height for each slide
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
    resizeMode: 'contain',  // Ensure the image fits well
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f53a4',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#ef7b15',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ff6347',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
});

export default OnboardingScreen;
