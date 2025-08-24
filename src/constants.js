// App-wide constants and configuration

// API Configuration
export const API_CONFIG = {
  // TODO: Update with actual backend URL when backend is ready
  BASE_URL: 'http://localhost:8090',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
};

// PocketBase Configuration
export const POCKETBASE_CONFIG = {
  // TODO: Update with actual PocketBase URL when backend is ready
  URL: 'http://localhost:8090',
  COLLECTIONS: {
    USERS: 'users',
    FORMS: 'forms',
    DAILY_FORMS: 'daily_forms',
    WEEKLY_FORMS: 'weekly_forms',
    MONTHLY_FORMS: 'monthly_forms',
    QUARTERLY_FORMS: 'quarterly_forms',
    YEARLY_FORMS: 'yearly_forms',
  },
};

// Form Types
export const FORM_TYPES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
  YEARLY: 'yearly',
};

// Navigation Routes
export const ROUTES = {
  // Auth Routes
  AUTH: 'Auth',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  FORGOT_PASSWORD: 'ForgotPassword',
  
  // Main App Routes
  APP: 'App',
  DASHBOARD: 'Dashboard',
  FORMS: 'Forms',
  
  // Form Routes
  DAILY_FORM: 'DailyForm',
  WEEKLY_FORM: 'WeeklyForm',
  MONTHLY_FORM: 'MonthlyForm',
  QUARTERLY_FORM: 'QuarterlyForm',
  YEARLY_FORM: 'YearlyForm',
  
  // Other Routes
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
};

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
  VIEWER: 'viewer',
};

// Form Status
export const FORM_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  PENDING: 'pending',
};

// Validation Messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL: 'Please enter a valid email address',
  PASSWORD_MIN: 'Password must be at least 8 characters',
  PASSWORD_MATCH: 'Passwords must match',
  INVALID_CREDENTIALS: 'Invalid email or password',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
};

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  FORM_DRAFTS: 'form_drafts',
  APP_SETTINGS: 'app_settings',
  THEME_PREFERENCE: 'theme_preference',
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// Screen Orientation
export const ORIENTATION = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
};

// Tablet-specific constants
export const TABLET_CONFIG = {
  MIN_WIDTH: 768,
  SIDEBAR_WIDTH: 280,
  CONTENT_PADDING: 32,
};

// Form field types
export const FIELD_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
  PHONE: 'phone',
  DATE: 'date',
  TIME: 'time',
  DATETIME: 'datetime',
  SELECT: 'select',
  MULTISELECT: 'multiselect',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXTAREA: 'textarea',
  FILE: 'file',
  SIGNATURE: 'signature',
};

// Error codes
export const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  AUTH_ERROR: 'AUTH_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  FORM_SAVED: 'Form saved successfully',
  FORM_SUBMITTED: 'Form submitted successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully',
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'YYYY-MM-DD',
  DATETIME: 'MMM DD, YYYY HH:mm',
  TIME: 'HH:mm',
};

// File upload limits
export const FILE_LIMITS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  MAX_FILES: 5,
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Debounce delays
export const DEBOUNCE_DELAYS = {
  SEARCH: 300,
  FORM_AUTO_SAVE: 1000,
  API_CALL: 500,
};

export default {
  API_CONFIG,
  POCKETBASE_CONFIG,
  FORM_TYPES,
  ROUTES,
  USER_ROLES,
  FORM_STATUS,
  VALIDATION_MESSAGES,
  STORAGE_KEYS,
  ANIMATION_DURATIONS,
  ORIENTATION,
  TABLET_CONFIG,
  FIELD_TYPES,
  ERROR_CODES,
  SUCCESS_MESSAGES,
  DATE_FORMATS,
  FILE_LIMITS,
  PAGINATION,
  DEBOUNCE_DELAYS,
};
