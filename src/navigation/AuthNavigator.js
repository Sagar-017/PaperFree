// AuthNavigator.js
// Navigation stack for authentication screens

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

/**
 * AuthNavigator Component
 * Handles navigation for authentication-related screens
 * Includes login, signup, and forgot password screens
 */
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerShown: false, // Hide header for auth screens
        gestureEnabled: false, // Disable swipe back gesture
      }}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      
      {/* TODO: Add SignupScreen when implemented */}
      {/* <Stack.Screen
        name={ROUTES.SIGNUP}
        component={SignupScreen}
        options={{
          title: 'Sign Up',
        }}
      /> */}
      
      {/* TODO: Add ForgotPasswordScreen when implemented */}
      {/* <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
