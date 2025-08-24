// App.js
// Main application entry point
// Handles navigation, authentication, font loading, and orientation

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Font from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

// Import navigation components
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';

// Import store and utilities
import { useAuthStore } from './src/store/authStore';
import { colors } from './src/theme';

// Create React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

/**
 * Font loading configuration
 * Loads custom fonts for the application with fallbacks for web
 */
const loadFonts = async () => {
  try {
    // Only load fonts on native platforms
    if (Platform.OS !== 'web') {
      await Font.loadAsync({
        // Inter font family for main app text
        'Inter': require('./src/assets/fonts/Inter-Regular.ttf'),
        'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
        'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
        'Inter-Light': require('./src/assets/fonts/Inter-Light.ttf'),
        
        // Dancing Script for Fazlani logo
        'Dancing Script': require('./src/assets/fonts/DancingScript-Regular.ttf'),
        'Dancing Script-Bold': require('./src/assets/fonts/DancingScript-Bold.ttf'),
      });
    } else {
      // For web, we'll use system fonts via CSS
      console.log('Using system fonts for web platform');
    }
  } catch (error) {
    console.warn('Font loading failed, using system fonts:', error);
    // For web, we'll use system fonts as fallback
  }
};

/**
 * Main App Component
 * Handles authentication state, navigation, and app initialization
 */
const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appReady, setAppReady] = useState(false);
  const { isAuthenticated, initializeAuth } = useAuthStore();

  // Initialize app on mount
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load custom fonts
        await loadFonts();
        setFontsLoaded(true);

        // Lock orientation to landscape for tablet-first design
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE
        );

        // Initialize authentication state
        await initializeAuth();

        setAppReady(true);
      } catch (error) {
        console.error('App initialization error:', error);
        // Continue with app even if initialization fails
        setAppReady(true);
      }
    };

    initializeApp();
  }, [initializeAuth]);

  // Show loading screen while fonts are loading
  if (!fontsLoaded || !appReady) {
    return (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar style="auto" />
          {/* TODO: Add proper loading screen component */}
          <div style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: colors.background 
          }}>
            <p style={{ 
              fontSize: 18, 
              color: colors.darkText,
              fontFamily: 'Inter, sans-serif'
            }}>
              Loading PaperFree...
            </p>
          </div>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <NavigationContainer>
            {/* Conditional navigation based on authentication state */}
            {isAuthenticated ? (
              <AppNavigator />
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
