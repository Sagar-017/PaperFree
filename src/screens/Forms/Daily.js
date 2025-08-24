// Daily.js
// Daily form screen - placeholder for future implementation

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

/**
 * Daily Form Screen
 * Placeholder component for daily form functionality
 * Will be implemented with actual form fields and validation
 */
const Daily = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Form</Text>
        <Text style={styles.subtitle}>Complete your daily report</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.placeholderText}>
          Daily form implementation coming soon...
        </Text>
        <Text style={styles.description}>
          This screen will contain form fields for daily reporting,
          validation, and submission functionality.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.sizes.headingLarge,
    color: colors.darkText,
    fontFamily: typography.fonts.bold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.sizes.body,
    color: colors.mediumGrey,
    fontFamily: typography.fonts.regular,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: typography.sizes.headingMedium,
    color: colors.primaryBlue,
    fontFamily: typography.fonts.bold,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.sizes.body,
    color: colors.mediumGrey,
    fontFamily: typography.fonts.regular,
    textAlign: 'center',
    lineHeight: typography.lineHeights.body,
  },
});

export default Daily;
