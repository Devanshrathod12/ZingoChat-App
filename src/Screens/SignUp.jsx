import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, StatusBar, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale } from '../Styles/StyleConfig';
import { colors } from '../Styles/colors';

import GoogleLogo from '../assets/BlackGoogleIcon.png';
import FacebookLogo from '../assets/FaceBookIcon.png';
import AppleLogo from '../assets/AppleIcon.png';
import NavigationString from '../Navigation/NavigationString'; // Assuming you have this for navigation to Login

const { width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.WhiteBackground}
        barStyle="dark-content"
      />

      <View style={styles.topRightShape} />
      <View style={styles.bottomLeftShape1} />
      <View style={styles.bottomLeftShape2} />

      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.descriptionText}>Create an account so you can explore all the existing jobs</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              focusedInput === 'email' && styles.activeInput
            ]}
            placeholder="Email"
            placeholderTextColor={colors.SecondaryText}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setFocusedInput('email')}
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'password' && styles.activeInput
            ]}
            placeholder="Password"
            placeholderTextColor={colors.SecondaryText}
            secureTextEntry
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
          />
          <TextInput
            style={[
              styles.input,
              focusedInput === 'confirmPassword' && styles.activeInput
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={colors.SecondaryText}
            secureTextEntry
            onFocus={() => setFocusedInput('confirmPassword')}
            onBlur={() => setFocusedInput(null)}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(NavigationString.Login)} style={styles.alreadyHaveAccountButton}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account</Text>
        </TouchableOpacity>

        <View style={styles.orContinueContainer}>
          <Text style={styles.orContinueText}>Or continue with</Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={GoogleLogo} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={FacebookLogo} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={AppleLogo} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WhiteBackground,
  },
  topRightShape: {
    position: 'absolute',
    top: -verticalScale(150),
    right: -scale(100),
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: width * 0.6,
    backgroundColor: colors.InputBgBlue,
    opacity: 0.6,
    zIndex: -1,
  },
  bottomLeftShape1: {
    position: 'absolute',
    bottom: -verticalScale(100),
    left: -scale(150),
    width: width,
    height: width,
    borderRadius: width / 2,
    borderWidth: 1,
    borderColor: colors.LineColor,
    zIndex: -1,
  },
  bottomLeftShape2: {
    position: 'absolute',
    bottom: -verticalScale(250),
    left: -scale(50),
    width: width,
    height: width,
    borderRadius: width / 2,
    borderWidth: 1,
    borderColor: colors.LineColor,
    zIndex: -1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(30),
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(50),
    marginTop: verticalScale(10),
  },
  createAccountTitle: {
    fontSize: fontScale(32),
    fontWeight: "bold",
    color: colors.BlueBackground,
    marginBottom: verticalScale(40),
  },
  descriptionText: {
    fontSize: fontScale(24),
    color: colors.BlackText,
    fontWeight: "600",
    textAlign: 'center',
    lineHeight: 28,
  },
  inputContainer: {
    width: '100%',
    marginBottom: verticalScale(30),
  },
  input: {
    width: '100%',
    height: verticalScale(55),
    backgroundColor: colors.InputBgBlue,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(20),
    fontSize: fontScale(15),
    color: colors.BlackText,
    marginBottom: verticalScale(20),
    fontWeight: '500',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeInput: {
    borderColor: colors.BrandBlue,
  },
  signUpButton: {
    width: '100%',
    height: verticalScale(55),
    backgroundColor: colors.BrandBlue,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(34),
    shadowColor: colors.BrandBlue,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  signUpButtonText: {
    fontSize: fontScale(18),
    fontWeight: '700',
    color: colors.White,
  },
  alreadyHaveAccountButton: {
    marginBottom: verticalScale(50),
  },
  alreadyHaveAccountText: {
    fontSize: fontScale(14),
    color: colors.DarkGrayText,
    fontWeight: '700',
  },
  orContinueContainer: {
    width: '100%',
    alignItems: 'center',
  },
  orContinueText: {
    fontSize: fontScale(13),
    color: colors.BrandBlue,
    fontWeight: '700',
    marginBottom: verticalScale(20),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  socialButton: {
    width: scale(60),
    height: verticalScale(45),
    borderRadius: moderateScale(10),
    backgroundColor: colors.SocialBtnBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
  },
});