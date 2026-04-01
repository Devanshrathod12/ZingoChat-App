import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, StatusBar } from 'react-native';
import { scale, verticalScale } from '../Styles/StyleConfig';
import { colors } from '../Styles/colors';

import HandshakeImg from '../assets/HandShack.png';
import PhoneImg from '../assets/Phone.png';
import GoogleLogo from '../assets/Googlelogo.png';
import NavigationString from '../Navigation/NavigationString';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const originalData = [
  { id: '1', image: HandshakeImg, title: "Your app for fast chats", subTitle: "Connect with anyone in real-time" },
  { id: '2', image: PhoneImg, title: "High Quality Calls", subTitle: "Clear audio and video calling experience" },
];

const infiniteData = Array.from({ length: 20 }).map((_, index) => ({
  ...originalData[index % originalData.length],
  uniqueId: `item-${index}`,
}));

const IntroScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation()

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= infiniteData.length) {
        nextIndex = 0;
        flatListRef.current?.scrollToIndex({ index: 0, animated: false });
      } else {
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.illustration} resizeMode="contain" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );

  const activeDotIndex = currentIndex % originalData.length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.WhiteBackground}
        barStyle="dark-content"
      />

      <View style={styles.listWrapper}>
        <FlatList
          ref={flatListRef}
          data={infiniteData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          keyExtractor={(item) => item.uniqueId}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>

      <View style={styles.pagination}>
        {originalData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeDotIndex && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.Login)}  activeOpacity={0.8} style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.googleBtn}>
          <Image source={GoogleLogo} style={styles.googleIcon} />
          <Text style={styles.googleBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
        Joining our app means you agree with our <Text style={styles.linkText}>Terms of Use</Text> and <Text style={styles.linkText}>Privacy policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WhiteBackground
  },
  listWrapper: {
    flex: 0.6,
    marginTop: verticalScale(80),
  },
  slide: {
    width: width,
    alignItems: 'center'
  },
  imageContainer: {
    height: verticalScale(280),
    justifyContent: 'center',
  },
  illustration: {
    width: scale(280),
    height: scale(280)
  },
  contentContainer: {
    paddingHorizontal: scale(30),
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  title: {
    fontSize: scale(26),
    fontWeight: '800',
    color: colors.BlackText,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: scale(16),
    color: colors.LightText,
    textAlign: 'center',
    marginTop: verticalScale(8)
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20)
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: 4,
    backgroundColor: colors.DotInactive,
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: colors.PrimaryBlue,
    width: scale(18)
  },
  buttonContainer: {
    flex: 0.3,
    paddingHorizontal: scale(20),
    paddingBottom: verticalScale(20),
    justifyContent: 'flex-end'
  },
  primaryBtn: {
    backgroundColor: colors.Blue,
    height: verticalScale(55),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  primaryBtnText: {
    fontSize: scale(16),
    fontWeight: '700',
    color: colors.White
  },
  googleBtn: {
    backgroundColor: colors.GoogleGray,
    height: verticalScale(55),
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  googleIcon: {
    width: scale(20),
    height: scale(20),
    marginRight: 10
  },
  googleBtnText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: colors.BlackText
  },
  footerText: {
    fontSize: scale(11),
    color: colors.LightText,
    textAlign: 'center'
  },
  linkText: {
    fontWeight: '600',
    textDecorationLine: 'underline'
  }
});