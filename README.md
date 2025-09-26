# MGood Application 🚀

A professional React Native/Expo application built with TypeScript, featuring a modern and scalable architecture.

## 🏗️ Project Structure

This project follows industry best practices with a well-organized folder structure:

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── services/           # External service integrations
├── styles/             # Styling and theming
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.ts           # Main entry point
```

For detailed structure information, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MgoodApplication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Press `w` for Web
   - Scan QR code with Expo Go app

## 🛠️ Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to a fresh project state

### Code Organization

- **Components**: Reusable UI components organized by type
- **Services**: API calls and external integrations
- **Hooks**: Custom React hooks for shared logic
- **Types**: TypeScript type definitions
- **Styles**: Centralized theming and styling
- **Utils**: Helper functions and utilities

### Best Practices

- Follow the established folder structure
- Use TypeScript for all new code
- Implement proper error handling
- Write clean, documented code
- Use the theme system for consistent styling

## 📱 Features

- Cross-platform (iOS, Android, Web)
- TypeScript support
- Professional folder structure
- Theme system with dark/light mode
- Service layer for API integration
- Custom hooks for shared logic

## 🎨 Theming

The app uses a centralized theme system located in `src/styles/themes/`:
- **Colors**: Light and dark mode color schemes
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing and layout tokens

## 🔧 Configuration

- Environment variables in `.env` files
- Expo configuration in `app.json`
- TypeScript configuration in `tsconfig.json`
- ESLint configuration in `eslint.config.js`

## 📚 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed project structure
- [src/README.md](./src/README.md) - Source code organization
- [Expo Documentation](https://docs.expo.dev/) - Expo framework docs

## 🤝 Contributing

1. Follow the established code style
2. Use the professional folder structure
3. Add proper TypeScript types
4. Update documentation as needed
5. Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License.
