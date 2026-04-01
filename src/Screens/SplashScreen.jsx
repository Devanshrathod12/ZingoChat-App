import React, { useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'; // Navigation hook
import { scale, verticalScale } from '../Styles/StyleConfig';
import { colors } from '../Styles/colors';
import logo from "../assets/Splashlogo.png";
import NavigationString from '../Navigation/NavigationString';

const SplashScreen = () => {
  const navigation = useNavigation();
  
  // Animation values (Ab sirf simple fade aur scale hai)
  const opacity = useSharedValue(0);
  const logoScale = useSharedValue(0.9);

  useEffect(() => {
    // Simple 1-second fade-in animation
    opacity.value = withTiming(1, { duration: 1000 });
    logoScale.value = withTiming(1, { duration: 1000 });

    // 2.5 seconds ke baad automatic navigation
    const timeout = setTimeout(() => {
      navigation.replace(NavigationString.IntroScreen);
      console.log("Navigate to Login");
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  return (
    <View style={styles.container}>
      {/* StatusBar color fixed to BlueBackground */}
      <StatusBar 
        backgroundColor={colors.BlueBackground} 
        barStyle="light-content" 
      />
      
      <View style={styles.centerContent}>
        <Animated.View style={animatedLogoStyle}>
          <Image 
            source={logo} 
            style={styles.logo} 
            resizeMode="contain" 
            tintColor={colors.White} // Agar logo white hai toh clean dikhega
          />
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <Animated.Text style={styles.footerText}>
          Built for Speed
        </Animated.Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BlueBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(250),
    height: scale(250),
  },
  footer: {
    position: 'absolute',
    bottom: verticalScale(40),
  },
  footerText: {
    fontSize: scale(12),
    color: colors.White,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.7,
  }
});