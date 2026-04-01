import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, StatusBar, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale } from '../Styles/StyleConfig';
import { colors } from '../Styles/colors';

import GoogleLogo from '../assets/BlackGoogleIcon.png';
import FacebookLogo from '../assets/FaceBookIcon.png';
import AppleLogo from '../assets/AppleIcon.png';
import NavigationString from '../Navigation/NavigationString';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
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
          <Text style={styles.loginTitle}>Login here</Text>
          <Text style={styles.welcomeText}>Welcome back you've{"\n"}been missed!</Text>
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
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(NavigationString.SignUp)} style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create new account</Text>
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

export default Login;

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
  loginTitle: {
    fontSize: fontScale(32),
    fontWeight: "bold",
    color: colors.BlueBackground,
    marginBottom: verticalScale(40),
  },
  welcomeText: {
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
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(5),
  },
  forgotPasswordText: {
    fontSize: fontScale(13),
    color: colors.BrandBlue,
    fontWeight: '700',
  },
  signInButton: {
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
  signInButtonText: {
    fontSize: fontScale(18),
    fontWeight: '700',
    color: colors.White,
  },
  createAccountButton: {
    marginBottom: verticalScale(50),
  },
  createAccountText: {
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