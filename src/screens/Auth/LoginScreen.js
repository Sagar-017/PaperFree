// LoginScreen.js
// Login screen component matching the Figma design
// Features Fazlani and AJAS Services logos, form validation, and responsive design

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../../store/authStore';
import { colors, typography, spacing, borderRadius, commonStyles } from '../../theme';
import { moderateScale } from 'react-native-size-matters';
import { VALIDATION_MESSAGES, ROUTES } from '../../constants';

// Validation schema for login form
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.EMAIL)
    .required(VALIDATION_MESSAGES.REQUIRED),
  password: yup
    .string()
    .min(8, VALIDATION_MESSAGES.PASSWORD_MIN)
    .required(VALIDATION_MESSAGES.REQUIRED),
  role: yup
    .string()
    .required(VALIDATION_MESSAGES.REQUIRED),
});

/**
 * LoginScreen Component
 * Displays login form with Fazlani and AJAS Services branding
 * Handles form validation and authentication
 */
const LoginScreen = () => {
  const navigation = useNavigation();
  const { login, isLoading, error, clearError } = useAuthStore();
  
  // Form state
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Admin');
  
  // Form hook setup
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      role: 'Admin',
    },
  });

  // Role options for dropdown
  const roleOptions = ['Admin', 'User', 'Manager', 'Viewer'];

  // Clear error when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      console.log('Login form data:', data);
      
      // TODO: Integrate PocketBase auth (handled by backend dev)
      // pb.collection('users').authWithPassword(data.email, data.password)
      // On success -> navigate to dashboard
      
      const result = await login(data.email, data.password);
      
      if (result.success) {
        // Navigate to main app after successful login
        navigation.replace(ROUTES.APP);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', error.message || 'Please check your credentials and try again.');
    }
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    // TODO: Navigate to forgot password screen
    Alert.alert('Forgot Password', 'This feature will be implemented soon.');
  };

  // Handle signup navigation
  const handleSignup = () => {
    // TODO: Navigate to signup screen
    Alert.alert('Sign Up', 'This feature will be implemented soon.');
  };

  // Render role dropdown
  const renderRoleDropdown = () => (
    <View style={styles.dropdownContainer}>
      <Text style={styles.label}>Role</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownText}>{selectedRole}</Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </View>
      {errors.role && (
        <Text style={styles.errorText}>{errors.role.message}</Text>
      )}
    </View>
  );

  // Render password input with toggle
  const renderPasswordInput = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              placeholderTextColor={colors.mediumGrey}
              secureTextEntry={!showPassword}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              autoCapitalize="none"
            />
          )}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.eyeIconText}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </Text>
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Image Container */}
        <View style={styles.backgroundContainer}>
          {/* TODO: Add background image of three women collaborating */}
          <View style={styles.backgroundPlaceholder}>
            <Text style={styles.backgroundText}>Background Image</Text>
            <Text style={styles.backgroundSubtext}>Three women collaborating on laptop</Text>
          </View>
          
          {/* AJAS Services Logo */}
          <View style={styles.ajasLogoContainer}>
            <View style={styles.ajasLogo}>
              {/* TODO: Replace with actual AJAS Services logo SVG */}
              <View style={styles.ajasLogoIcon}>
                <View style={[styles.ajasLogoCircle, { backgroundColor: colors.ajasGreen }]} />
                <View style={[styles.ajasLogoCircle, { backgroundColor: colors.ajasBlue }]} />
                <View style={[styles.ajasLogoCircle, { backgroundColor: colors.ajasBlue }]} />
              </View>
              <Text style={styles.ajasLogoText}>AJAS Services</Text>
            </View>
          </View>
        </View>

        {/* Login Form Container */}
        <View style={styles.formContainer}>
          {/* Fazlani Logo */}
          <View style={styles.fazlaniLogoContainer}>
            <Text style={styles.fazlaniLogo}>Fazlani</Text>
            <View style={styles.taglineContainer}>
              <Text style={styles.tagline}>One with the world</Text>
            </View>
          </View>

          {/* Welcome Message */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Welcome to Paper Free 👋</Text>
            <Text style={styles.welcomeSubtitle}>
              Kindly fill in your details below to login into your account
            </Text>
          </View>

          {/* Login Form */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder="Daphne Smith"
                    placeholderTextColor={colors.mediumGrey}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>

            {/* Password Input */}
            {renderPasswordInput()}

            {/* Role Dropdown */}
            {renderRoleDropdown()}

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={colors.white} size="small" />
              ) : (
                <Text style={styles.loginButtonText}>Login</Text>
              )}
            </TouchableOpacity>

            {/* Error Display */}
            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            {/* Forgot Password Link */}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Signup Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>New Here? </Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupLink}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles matching the Figma design
const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '100%',
    backgroundColor: colors.primaryBlue,
  },
  backgroundPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
  },
  backgroundText: {
    fontSize: typography.sizes.headingMedium,
    color: colors.white,
    fontFamily: typography.fonts.bold,
  },
  backgroundSubtext: {
    fontSize: typography.sizes.body,
    color: colors.white,
    fontFamily: typography.fonts.regular,
    marginTop: spacing.sm,
  },
  ajasLogoContainer: {
    position: 'absolute',
    bottom: spacing.xl,
    right: spacing.xl,
  },
  ajasLogo: {
    alignItems: 'center',
  },
  ajasLogoIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  ajasLogoCircle: {
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    marginHorizontal: moderateScale(2),
  },
  ajasLogoText: {
    fontSize: typography.sizes.small,
    color: colors.white,
    fontFamily: typography.fonts.medium,
  },
  formContainer: {
    width: '50%',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  fazlaniLogoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  fazlaniLogo: {
    fontSize: moderateScale(48),
    color: colors.primaryOrange,
    fontFamily: typography.fonts.script,
    fontWeight: typography.weights.bold,
  },
  taglineContainer: {
    backgroundColor: colors.primaryOrange,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.small,
    marginTop: spacing.sm,
  },
  tagline: {
    fontSize: typography.sizes.small,
    color: colors.white,
    fontFamily: typography.fonts.regular,
    fontStyle: 'italic',
  },
  welcomeContainer: {
    marginBottom: spacing.xl,
  },
  welcomeTitle: {
    fontSize: typography.sizes.headingLarge,
    color: colors.darkText,
    fontFamily: typography.fonts.bold,
    marginBottom: spacing.sm,
  },
  welcomeSubtitle: {
    fontSize: typography.sizes.body,
    color: colors.mediumGrey,
    fontFamily: typography.fonts.regular,
    lineHeight: typography.lineHeights.body,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: typography.sizes.label,
    color: colors.darkText,
    fontFamily: typography.fonts.medium,
    marginBottom: spacing.sm,
  },
  input: {
    ...commonStyles.input,
  },
  inputError: {
    borderColor: colors.error,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    ...commonStyles.input,
    paddingRight: spacing.xl,
  },
  eyeIcon: {
    position: 'absolute',
    right: spacing.md,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  eyeIconText: {
    fontSize: typography.sizes.body,
    color: colors.lightGrey,
  },
  dropdownContainer: {
    marginBottom: spacing.lg,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing.inputPadding,
    paddingVertical: spacing.inputPadding,
    backgroundColor: colors.white,
  },
  dropdownText: {
    fontSize: typography.sizes.body,
    color: colors.darkText,
    fontFamily: typography.fonts.regular,
  },
  dropdownIcon: {
    fontSize: typography.sizes.small,
    color: colors.lightGrey,
  },
  loginButton: {
    ...commonStyles.button.primary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontSize: typography.sizes.body,
    color: colors.white,
    fontFamily: typography.fonts.bold,
  },
  errorContainer: {
    backgroundColor: colors.error + '10',
    padding: spacing.md,
    borderRadius: borderRadius.small,
    marginBottom: spacing.md,
  },
  errorText: {
    fontSize: typography.sizes.small,
    color: colors.error,
    fontFamily: typography.fonts.regular,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  forgotPasswordText: {
    fontSize: typography.sizes.small,
    color: colors.primaryBlue,
    fontFamily: typography.fonts.regular,
    textDecorationLine: 'underline',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: typography.sizes.small,
    color: colors.mediumGrey,
    fontFamily: typography.fonts.regular,
  },
  signupLink: {
    fontSize: typography.sizes.small,
    color: colors.primaryBlue,
    fontFamily: typography.fonts.medium,
    textDecorationLine: 'underline',
  },
};

export default LoginScreen;
