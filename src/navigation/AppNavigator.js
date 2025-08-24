// AppNavigator.js
// Main app navigation with tab structure for forms and other screens

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Daily from '../screens/Forms/Daily';
import Weekly from '../screens/Forms/Weekly';
import Monthly from '../screens/Forms/Monthly';
import Quarterly from '../screens/Forms/Quarterly';
import Yearly from '../screens/Forms/Yearly';
import { ROUTES } from '../constants';
import { colors, typography } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * Forms Tab Navigator
 * Handles navigation between different form types
 */
const FormsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Custom tab icons - using text for now, can be replaced with SVG icons
          let iconName;
          
          switch (route.name) {
            case ROUTES.DAILY_FORM:
              iconName = '📅';
              break;
            case ROUTES.WEEKLY_FORM:
              iconName = '📊';
              break;
            case ROUTES.MONTHLY_FORM:
              iconName = '📈';
              break;
            case ROUTES.QUARTERLY_FORM:
              iconName = '📋';
              break;
            case ROUTES.YEARLY_FORM:
              iconName = '📊';
              break;
            default:
              iconName = '📄';
          }
          
          return (
            <Text style={{ fontSize: size, color }}>
              {iconName}
            </Text>
          );
        },
        tabBarActiveTintColor: colors.primaryBlue,
        tabBarInactiveTintColor: colors.mediumGrey,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.lightGrey,
          paddingBottom: 8,
          paddingTop: 8,
          height: 80, // Larger for tablet
        },
        tabBarLabelStyle: {
          fontSize: typography.sizes.small,
          fontFamily: typography.fonts.medium,
          marginTop: 4,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={ROUTES.DAILY_FORM}
        component={Daily}
        options={{
          title: 'Daily',
          tabBarLabel: 'Daily',
        }}
      />
      <Tab.Screen
        name={ROUTES.WEEKLY_FORM}
        component={Weekly}
        options={{
          title: 'Weekly',
          tabBarLabel: 'Weekly',
        }}
      />
      <Tab.Screen
        name={ROUTES.MONTHLY_FORM}
        component={Monthly}
        options={{
          title: 'Monthly',
          tabBarLabel: 'Monthly',
        }}
      />
      <Tab.Screen
        name={ROUTES.QUARTERLY_FORM}
        component={Quarterly}
        options={{
          title: 'Quarterly',
          tabBarLabel: 'Quarterly',
        }}
      />
      <Tab.Screen
        name={ROUTES.YEARLY_FORM}
        component={Yearly}
        options={{
          title: 'Yearly',
          tabBarLabel: 'Yearly',
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Dashboard Screen
 * Main dashboard view - placeholder for future implementation
 */
const Dashboard = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: typography.sizes.headingLarge, color: colors.darkText, fontFamily: typography.fonts.bold }}>
        Dashboard
      </Text>
      <Text style={{ fontSize: typography.sizes.body, color: colors.mediumGrey, fontFamily: typography.fonts.regular, marginTop: 16 }}>
        Welcome to PaperFree Dashboard
      </Text>
    </View>
  );
};

/**
 * Profile Screen
 * User profile view - placeholder for future implementation
 */
const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: typography.sizes.headingLarge, color: colors.darkText, fontFamily: typography.fonts.bold }}>
        Profile
      </Text>
      <Text style={{ fontSize: typography.sizes.body, color: colors.mediumGrey, fontFamily: typography.fonts.regular, marginTop: 16 }}>
        User profile implementation coming soon...
      </Text>
    </View>
  );
};

/**
 * Settings Screen
 * App settings view - placeholder for future implementation
 */
const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: typography.sizes.headingLarge, color: colors.darkText, fontFamily: typography.fonts.bold }}>
        Settings
      </Text>
      <Text style={{ fontSize: typography.sizes.body, color: colors.mediumGrey, fontFamily: typography.fonts.regular, marginTop: 16 }}>
        App settings implementation coming soon...
      </Text>
    </View>
  );
};

/**
 * Main App Navigator
 * Handles navigation for authenticated users
 */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.FORMS}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
        },
        headerTitleStyle: {
          fontSize: typography.sizes.headingSmall,
          color: colors.darkText,
          fontFamily: typography.fonts.bold,
        },
        headerTintColor: colors.primaryBlue,
      }}
    >
      <Stack.Screen
        name={ROUTES.DASHBOARD}
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
      <Stack.Screen
        name={ROUTES.FORMS}
        component={FormsTabNavigator}
        options={{
          title: 'Forms',
          headerShown: false, // Hide header for tab navigator
        }}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
