# PaperFree

A tablet-first React Native (Expo) application developed for Fazlani on behalf of AJAS Services. This app provides a comprehensive form management system for daily, weekly, monthly, quarterly, and yearly reports.

## 🚀 Features

- **Tablet-First Design**: Optimized for landscape usage on tablets
- **Form Management**: Complete workflow for various report types
- **Authentication**: Secure login system with role-based access
- **Responsive UI**: Modern, clean interface matching brand guidelines
- **Offline Support**: Form data persistence and offline capabilities
- **Real-time Sync**: Synchronization with backend when online

## 🛠 Tech Stack

### Frontend
- **React Native** with Expo SDK 50
- **React Navigation** for navigation management
- **React Hook Form** + **Yup** for form handling and validation
- **TanStack React Query** for server state management
- **Zustand** for lightweight global state
- **React Native SVG** for icons and vector assets
- **Expo Font** for custom font loading
- **React Native Size Matters** for responsive scaling
- **Expo Screen Orientation** for landscape lock

### Backend (Separate Developer)
- **PocketBase** for database and authentication
- **Node.js** server-side middleware
- **RESTful API** for data communication

## 📁 Project Structure

```
PaperFree/
├── src/
│   ├── assets/
│   │   ├── fonts/           # Custom fonts (Inter, Dancing Script)
│   │   └── images/          # App icons, logos, splash screen
│   ├── components/
│   │   ├── forms/           # Reusable form components
│   │   └── ui/              # UI components (buttons, inputs, etc.)
│   ├── screens/
│   │   ├── Auth/
│   │   │   └── LoginScreen.js
│   │   └── Forms/
│   │       ├── Daily.js
│   │       ├── Weekly.js
│   │       ├── Monthly.js
│   │       ├── Quarterly.js
│   │       └── Yearly.js
│   ├── navigation/
│   │   ├── AppNavigator.js  # Main app navigation
│   │   └── AuthNavigator.js # Authentication navigation
│   ├── hooks/               # Custom React hooks
│   ├── services/
│   │   ├── pocketbase.js    # PocketBase connection logic
│   │   └── api.js           # Node.js API calls
│   ├── context/             # React Context providers
│   ├── utils/               # Utility functions
│   ├── store/
│   │   └── authStore.js     # Zustand auth store
│   ├── theme.js             # Design system and styling
│   └── constants.js         # App constants and configuration
├── App.js                   # Main app entry point
├── app.json                 # Expo configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#F78F1E` (Fazlani brand)
- **Primary Blue**: `#2C5F9B` (Login button)
- **AJAS Green**: `#8CC63F` (AJAS Services)
- **AJAS Blue**: `#00AEEF` (AJAS Services)
- **Dark Text**: `#1A1A1A`
- **Medium Grey**: `#666666`
- **Light Grey**: `#CCCCCC`

### Typography
- **Inter Font Family**: Main app text (Regular, Medium, Bold, Light)
- **Dancing Script**: Fazlani logo styling
- **Responsive Sizing**: Using `react-native-size-matters`

### Spacing & Layout
- **Consistent Spacing**: 4px, 8px, 16px, 24px, 32px, 48px
- **Border Radius**: 4px, 8px, 12px, 16px, 50px
- **Tablet-First**: Optimized for landscape orientation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PaperFree
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup fonts**
   - Download Inter and Dancing Script fonts from Google Fonts
   - Place `.ttf` files in `src/assets/fonts/`
   - Ensure filenames match imports in `App.js`

4. **Setup images**
   - Add required images to `src/assets/images/`
   - Update `app.json` if using different filenames

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
# Backend Configuration
API_BASE_URL=http://localhost:8090
POCKETBASE_URL=http://localhost:8090

# App Configuration
APP_ENV=development
```

### Backend Integration
The app includes placeholder services for backend integration:
- `src/services/pocketbase.js` - PocketBase connection
- `src/services/api.js` - Node.js API calls

**TODO**: Update URLs and implement actual backend integration when backend is ready.

## 📱 App Features

### Authentication
- Login with email/password
- Role-based access control
- Token management and refresh
- Secure logout

### Form Management
- **Daily Forms**: Daily reporting and data entry
- **Weekly Forms**: Weekly summaries and analysis
- **Monthly Forms**: Monthly reports and metrics
- **Quarterly Forms**: Quarterly reviews and planning
- **Yearly Forms**: Annual reports and strategic data

### Navigation
- Tab-based navigation for form types
- Stack navigation for authentication
- Responsive design for tablet landscape

## 🧪 Development

### Code Style
- Use functional components with hooks
- Follow React Native best practices
- Implement proper error handling
- Add comprehensive comments

### State Management
- **Zustand**: Global authentication state
- **React Query**: Server state and caching
- **React Hook Form**: Form state and validation

### Testing
```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint
```

## 🔒 Security

- Secure token storage
- Input validation and sanitization
- HTTPS communication
- Role-based access control

## 📦 Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web
```bash
expo build:web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 TODO

### Frontend
- [ ] Implement form components with validation
- [ ] Add offline data persistence
- [ ] Create loading and error states
- [ ] Implement file upload functionality
- [ ] Add user profile management
- [ ] Create settings screen

### Backend Integration
- [ ] Connect to PocketBase backend
- [ ] Implement real API calls
- [ ] Add error handling and retry logic
- [ ] Implement file upload to backend
- [ ] Add real-time synchronization

### UI/UX
- [ ] Add proper loading screens
- [ ] Implement error boundaries
- [ ] Add accessibility features
- [ ] Create onboarding flow
- [ ] Add dark mode support

## 📞 Support

For support and questions:
- **AJAS Services**: [Contact Information]
- **Fazlani**: [Contact Information]

## 📄 License

This project is proprietary software developed for Fazlani by AJAS Services.

## 🙏 Acknowledgments

- **Fazlani** for the project requirements and branding
- **AJAS Services** for development and implementation
- **Expo** for the excellent development platform
- **React Native** community for the amazing ecosystem
