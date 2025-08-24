// authStore.js
// Global authentication state management using Zustand

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { authService } from '../services/pocketbase';
import { authAPI } from '../services/api';

/**
 * Authentication store state interface
 * @typedef {Object} AuthState
 * @property {Object|null} user - Current authenticated user
 * @property {string|null} token - Authentication token
 * @property {string|null} refreshToken - Refresh token
 * @property {boolean} isLoading - Loading state for auth operations
 * @property {string|null} error - Error message
 * @property {boolean} isAuthenticated - Authentication status
 */

/**
 * Authentication store actions interface
 * @typedef {Object} AuthActions
 * @property {Function} login - Login user
 * @property {Function} logout - Logout user
 * @property {Function} register - Register new user
 * @property {Function} refreshToken - Refresh authentication token
 * @property {Function} clearError - Clear error message
 * @property {Function} setUser - Set user data
 * @property {Function} updateUser - Update user data
 */

/**
 * Authentication store using Zustand with persistence
 * Manages user authentication state, tokens, and user data
 */
export const useAuthStore = create(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      token: null,
      refreshToken: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      /**
       * Login user with email and password
       * @param {string} email - User's email address
       * @param {string} password - User's password
       * @returns {Promise<Object>} Login result
       */
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        
        try {
          // Try PocketBase authentication first
          const authData = await authService.login(email, password);
          
          // Extract user data and tokens
          const user = authData.record;
          const token = authData.token;
          
          // Update store state
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return { success: true, user };
        } catch (error) {
          console.error('Login error:', error);
          
          // Fallback to Node.js API if PocketBase fails
          try {
            const result = await authAPI.login({ email, password });
            
            set({
              user: result.user,
              token: result.token,
              refreshToken: result.refreshToken,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            
            return { success: true, user: result.user };
          } catch (apiError) {
            console.error('API login error:', apiError);
            
            set({
              isLoading: false,
              error: error.message || 'Login failed',
            });
            
            throw error;
          }
        }
      },

      /**
       * Register new user
       * @param {Object} userData - User registration data
       * @returns {Promise<Object>} Registration result
       */
      register: async (userData) => {
        set({ isLoading: true, error: null });
        
        try {
          // Try PocketBase registration first
          const result = await authService.register(userData);
          
          set({
            user: result,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return { success: true, user: result };
        } catch (error) {
          console.error('Registration error:', error);
          
          // Fallback to Node.js API if PocketBase fails
          try {
            const result = await authAPI.register(userData);
            
            set({
              user: result.user,
              token: result.token,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            
            return { success: true, user: result.user };
          } catch (apiError) {
            console.error('API registration error:', apiError);
            
            set({
              isLoading: false,
              error: error.message || 'Registration failed',
            });
            
            throw error;
          }
        }
      },

      /**
       * Logout current user
       * @returns {Promise<boolean>} Logout success
       */
      logout: async () => {
        set({ isLoading: true, error: null });
        
        try {
          // Clear PocketBase auth
          await authService.logout();
          
          // Clear Node.js API auth
          await authAPI.logout();
          
          // Clear store state
          set({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
          
          return true;
        } catch (error) {
          console.error('Logout error:', error);
          
          // Clear store state even if logout fails
          set({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
          
          return true;
        }
      },

      /**
       * Refresh authentication token
       * @returns {Promise<Object>} Refresh result
       */
      refreshToken: async () => {
        const { refreshToken } = get();
        
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }
        
        set({ isLoading: true, error: null });
        
        try {
          // Try PocketBase token refresh first
          const result = await authService.refreshToken();
          
          set({
            token: result.token,
            isLoading: false,
            error: null,
          });
          
          return result;
        } catch (error) {
          console.error('Token refresh error:', error);
          
          // Fallback to Node.js API if PocketBase fails
          try {
            const result = await authAPI.refreshToken(refreshToken);
            
            set({
              token: result.token,
              refreshToken: result.refreshToken,
              isLoading: false,
              error: null,
            });
            
            return result;
          } catch (apiError) {
            console.error('API token refresh error:', apiError);
            
            set({
              isLoading: false,
              error: 'Token refresh failed',
            });
            
            // If refresh fails, logout user
            await get().logout();
            throw apiError;
          }
        }
      },

      /**
       * Clear error message
       */
      clearError: () => {
        set({ error: null });
      },

      /**
       * Set user data
       * @param {Object} user - User data
       */
      setUser: (user) => {
        set({ user, isAuthenticated: !!user });
      },

      /**
       * Update user data
       * @param {Object} userData - Updated user data
       */
      updateUser: (userData) => {
        const { user } = get();
        if (user) {
          set({ user: { ...user, ...userData } });
        }
      },

      /**
       * Check if user is authenticated
       * @returns {boolean} Authentication status
       */
      checkAuth: () => {
        const { token, user } = get();
        const isAuthenticated = !!(token && user);
        set({ isAuthenticated });
        return isAuthenticated;
      },

      /**
       * Initialize authentication state
       * Called on app startup to restore auth state
       */
      initializeAuth: async () => {
        try {
          // Check PocketBase auth first
          const isPocketBaseAuth = authService.isAuthenticated();
          const pocketBaseUser = authService.getCurrentUser();
          
          if (isPocketBaseAuth && pocketBaseUser) {
            set({
              user: pocketBaseUser,
              isAuthenticated: true,
            });
            return;
          }
          
          // Check Node.js API auth
          const apiUser = await authAPI.getProfile();
          
          if (apiUser) {
            set({
              user: apiUser,
              isAuthenticated: true,
            });
          }
        } catch (error) {
          console.error('Auth initialization error:', error);
          // Clear invalid auth state
          set({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
          });
        }
      },
    }),
    {
      name: 'auth-storage', // Storage key
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
      // Only persist specific fields
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// Export store selectors for better performance
export const useUser = () => useAuthStore((state) => state.user);
export const useToken = () => useAuthStore((state) => state.token);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useAuthLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);

export default useAuthStore;
