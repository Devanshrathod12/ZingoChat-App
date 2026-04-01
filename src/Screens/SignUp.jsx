import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, StatusBar } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale } from '../Styles/StyleConfig';
import { colors } from '../Styles/colors';

import GoogleLogo from '../assets/BlackGoogleIcon.png'; // Assuming Google.png is the G icon
import FacebookLogo from '../assets/FaceBookIcon.png'; // Assuming Facebook.png is the F icon
import AppleLogo from '../assets/AppleIcon.png';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.MainBackground}
        barStyle="dark-content"
      />

      <View style={styles.backgroundCircleTopLeft} />
      <View style={styles.backgroundCircleBottomRight} />

      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.descriptionText}>Create an account so you can explore all the existing jobs</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.PlaceholderText}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.PlaceholderText}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={colors.PlaceholderText}
            secureTextEntry
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.alreadyHaveAccountButton}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account</Text>
        </TouchableOpacity>

        <View style={styles.orContinueContainer}>
          <Text style={styles.orContinueText}>Or continue with</Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={GoogleLogo} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={FacebookLogo} style={styles.socialButton} />
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
    backgroundColor: colors.MainBackground,
  },
  backgroundCircleTopLeft: {
    position: 'absolute',
    top: -verticalScale(100),
    left: -scale(100),
    width: scale(300),
    height: scale(300),
    borderRadius: scale(150),
    backgroundColor: colors.TransparentWhite,
  },
  backgroundCircleBottomRight: {
    position: 'absolute',
    bottom: -verticalScale(100),
    right: -scale(100),
    width: scale(300),
    height: scale(300),
    borderRadius: scale(150),
    backgroundColor: colors.TransparentWhite,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  headerContainer: {
    marginBottom: verticalScale(40),
  },
  createAccountTitle: {
    fontSize: fontScale(28),
    fontWeight: '700',
    color: colors.PrimaryBlue,
    textAlign: 'center',
    marginBottom: verticalScale(8),
  },
  descriptionText: {
    fontSize: fontScale(16),
    color: colors.SecondaryText,
    textAlign: 'center',
    paddingHorizontal: scale(10),
  },
  inputContainer: {
    width: '100%',
    marginBottom: verticalScale(20),
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: colors.InputBackground,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(15),
    fontSize: fontScale(16),
    color: colors.BlackText,
    marginBottom: verticalScale(15),
  },
  signUpButton: {
    width: '100%',
    height: verticalScale(55),
    backgroundColor: colors.PrimaryButtonBlue,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  signUpButtonText: {
    fontSize: fontScale(18),
    fontWeight: '700',
    color: colors.White,
  },
  alreadyHaveAccountButton: {
    marginBottom: verticalScale(40),
  },
  alreadyHaveAccountText: {
    fontSize: fontScale(16),
    color: colors.SecondaryText,
    fontWeight: '500',
  },
  orContinueContainer: {
    width: '100%',
    alignItems: 'center',
  },
  orContinueText: {
    fontSize: fontScale(14),
    color: colors.SecondaryText,
    marginBottom: verticalScale(20),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  socialButton: {
    width: scale(50),
    height: scale(50),
    borderRadius: moderateScale(10),
    backgroundColor: colors.InputBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
  },
});