import { Dimensions, Platform } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

// Color palette extracted from Fazlani and AJAS Services logos + login page
export const colors = {
  // Primary brand colors from Fazlani logo
  primaryOrange: '#F78F1E', // Fazlani logo orange
  primaryBlue: '#2C5F9B',   // Login button blue
  
  // AJAS Services brand colors
  ajasGreen: '#8CC63F',     // AJAS logo lime green
  ajasBlue: '#00AEEF',      // AJAS logo bright blue
  
  // UI Colors from login page
  white: '#FFFFFF',
  black: '#000000',
  darkText: '#1A1A1A',      // Main headings and input text
  mediumGrey: '#666666',    // Instructions and secondary text
  lightGrey: '#CCCCCC',     // Borders and icons
  veryLightGrey: '#E0E0E0', // Input borders
  
  // Background colors
  background: '#FFFFFF',
  cardBackground: '#FFFFFF',
  
  // Status colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
};

// Typography based on login page analysis with web fallbacks
export const typography = {
  // Font families - will be loaded via expo-font with web fallbacks
  fonts: {
    // Fazlani logo uses a custom script font - we'll use a similar alternative
    script: Platform.OS === 'web' ? 'Dancing Script, cursive' : 'Dancing Script', // Alternative for Fazlani logo
    regular: Platform.OS === 'web' ? 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' : 'Inter',         // Main app font - clean sans-serif
    medium: Platform.OS === 'web' ? 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' : 'Inter-Medium',
    bold: Platform.OS === 'web' ? 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' : 'Inter-Bold',
    light: Platform.OS === 'web' ? 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' : 'Inter-Light',
  },
  
  // Font sizes extracted from login page
  sizes: {
    // Large heading (Welcome to Paper Free)
    headingLarge: moderateScale(32),
    // Medium heading
    headingMedium: moderateScale(24),
    // Small heading
    headingSmall: moderateScale(20),
    // Body text (instructions, input text)
    body: moderateScale(16),
    // Labels
    label: moderateScale(14),
    // Small text (tagline, links)
    small: moderateScale(12),
    // Caption text
    caption: moderateScale(10),
  },
  
  // Font weights
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  
  // Line heights for better readability
  lineHeights: {
    headingLarge: moderateScale(40),
    headingMedium: moderateScale(32),
    headingSmall: moderateScale(28),
    body: moderateScale(24),
    label: moderateScale(20),
    small: moderateScale(16),
    caption: moderateScale(14),
  },
};

// Spacing and layout
export const spacing = {
  // Base spacing unit
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(48),
  
  // Specific spacing for login page elements
  inputPadding: moderateScale(12),
  buttonPadding: moderateScale(16),
  cardPadding: moderateScale(24),
  sectionSpacing: moderateScale(32),
};

// Border radius extracted from login page
export const borderRadius = {
  small: moderateScale(4),
  medium: moderateScale(8),
  large: moderateScale(12),
  xl: moderateScale(16),
  round: moderateScale(50),
};

// Shadows for depth
export const shadows = {
  small: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
};

// Responsive breakpoints for tablet-first design
export const breakpoints = {
  tablet: 768,
  desktop: 1024,
};

// Screen dimensions for responsive design
export const screenDimensions = {
  width,
  height,
  isTablet: width >= breakpoints.tablet,
  isLandscape: width > height,
};

// Common styles for reuse
export const commonStyles = {
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.medium,
    padding: spacing.cardPadding,
    ...shadows.small,
  },
  
  // Input styles matching login page
  input: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing.inputPadding,
    paddingVertical: spacing.inputPadding,
    fontSize: typography.sizes.body,
    fontFamily: typography.fonts.regular,
    color: colors.darkText,
    backgroundColor: colors.white,
  },
  
  // Button styles matching login page
  button: {
    primary: {
      backgroundColor: colors.primaryBlue,
      borderRadius: borderRadius.medium,
      paddingVertical: spacing.buttonPadding,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondary: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primaryBlue,
      borderRadius: borderRadius.medium,
      paddingVertical: spacing.buttonPadding,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  
  // Text styles
  text: {
    heading: {
      fontSize: typography.sizes.headingLarge,
      fontFamily: typography.fonts.bold,
      color: colors.darkText,
      lineHeight: typography.lineHeights.headingLarge,
    },
    body: {
      fontSize: typography.sizes.body,
      fontFamily: typography.fonts.regular,
      color: colors.darkText,
      lineHeight: typography.lineHeights.body,
    },
    label: {
      fontSize: typography.sizes.label,
      fontFamily: typography.fonts.medium,
      color: colors.darkText,
      lineHeight: typography.lineHeights.label,
    },
    small: {
      fontSize: typography.sizes.small,
      fontFamily: typography.fonts.regular,
      color: colors.mediumGrey,
      lineHeight: typography.lineHeights.small,
    },
  },
};

// Export all theme components
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  screenDimensions,
  commonStyles,
};
