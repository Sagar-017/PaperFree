// Monthly.js
// Monthly form screen - placeholder for future implementation

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

const Monthly = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Form</Text>
        <Text style={styles.subtitle}>Complete your monthly report</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.placeholderText}>
          Monthly form implementation coming soon...
        </Text>
        <Text style={styles.description}>
          This screen will contain form fields for monthly reporting,
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

export default Monthly;
