# MGood Application - Project Structure

This document outlines the professional folder structure for the MGood Application, a React Native/Expo application built with TypeScript.

## Root Directory Structure

```
MgoodApplication/
├── app/                    # Expo Router app directory
│   ├── (tabs)/            # Tab-based navigation
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 page
├── assets/                 # Static assets
│   ├── fonts/             # Custom fonts
│   └── images/            # Images and icons
├── src/                    # Main source code (NEW)
│   ├── components/        # Reusable components
│   ├── config/           # Configuration files
│   ├── hooks/            # Custom React hooks
│   ├── services/         # External services
│   ├── styles/           # Styling and themes
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   └── index.ts          # Main entry point
├── components/            # Legacy components (to be migrated)
├── constants/             # Legacy constants (to be migrated)
├── hooks/                 # Legacy hooks (to be migrated)
├── scripts/               # Build and utility scripts
├── .expo/                 # Expo configuration
├── .vscode/               # VS Code settings
├── node_modules/          # Dependencies
├── .gitignore            # Git ignore rules
├── app.json              # Expo app configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Migration Plan

### Phase 1: Create New Structure ✅
- [x] Create `src/` directory with professional structure
- [x] Set up index files for clean imports
- [x] Create theme system
- [x] Set up service layer
- [x] Add TypeScript types

### Phase 2: Migrate Existing Code
- [ ] Move `components/` to `src/components/`
- [ ] Move `constants/` to `src/config/constants/`
- [ ] Move `hooks/` to `src/hooks/`
- [ ] Update import paths throughout the application

### Phase 3: Clean Up
- [ ] Remove legacy directories
- [ ] Update documentation
- [ ] Run tests to ensure everything works

## Key Benefits of New Structure

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Components are properly organized
4. **Type Safety**: Centralized TypeScript definitions
5. **Theme System**: Consistent styling across the app
6. **Service Layer**: Clean separation of business logic

## Development Guidelines

### Adding New Features
1. Create feature directory in `src/components/features/`
2. Add components, types, and utilities as needed
3. Update relevant index files
4. Follow naming conventions

### Styling
- Use the theme system in `src/styles/themes/`
- Maintain consistency with existing design tokens
- Use TypeScript for theme types

### API Integration
- Use the service layer in `src/services/api/`
- Handle errors appropriately
- Use TypeScript for API types

### State Management
- Consider adding Redux Toolkit or Zustand in `src/store/`
- Keep state logic separate from UI components

## Environment Configuration

The application supports different environments:
- Development
- Staging
- Production

Environment-specific configuration should be added to `src/config/env/`.

## Testing Strategy

Consider adding:
- `src/__tests__/` for test files
- `src/mocks/` for test mocks
- Jest configuration for unit tests
- React Native Testing Library for component tests

## Performance Considerations

- Use React.memo for expensive components
- Implement proper lazy loading
- Optimize bundle size with tree shaking
- Use proper image optimization

## Security Best Practices

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Implement proper input validation
- Follow OWASP guidelines for mobile apps
