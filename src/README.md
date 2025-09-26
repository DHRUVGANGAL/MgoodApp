# Source Code Structure

This directory contains the main source code for the MGood Application, organized following industry best practices.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (buttons, inputs, etc.)
│   ├── layout/         # Layout components (headers, footers, etc.)
│   └── features/       # Feature-specific components
├── config/             # Configuration files
│   └── constants/      # Application constants
├── hooks/              # Custom React hooks
├── services/           # External service integrations
│   ├── api/           # API service layer
│   └── storage/       # Local storage service
├── styles/             # Styling and theming
│   └── themes/        # Theme definitions
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.ts           # Main entry point
```

## Component Organization

### UI Components (`components/ui/`)
Basic, reusable UI components that are not specific to any feature:
- Buttons, inputs, modals, etc.
- Should be highly reusable and configurable

### Layout Components (`components/layout/`)
Components that define the overall structure and layout:
- Headers, footers, navigation
- Layout wrappers and containers

### Feature Components (`components/features/`)
Components specific to particular features or business logic:
- Organized by feature name (e.g., `about/`, `auth/`, `dashboard/`)

## Best Practices

1. **Naming Conventions**
   - Use PascalCase for component files
   - Use camelCase for utility files
   - Use kebab-case for feature directories

2. **File Organization**
   - One component per file
   - Include index.ts files for clean imports
   - Group related files in feature directories

3. **Import/Export**
   - Use named exports for components
   - Use default exports sparingly
   - Maintain clean import paths through index files

4. **TypeScript**
   - Define types in the `types/` directory
   - Use strict typing for all components
   - Export types from index files

## Adding New Components

1. Determine the component type (ui, layout, or feature)
2. Create the component file in the appropriate directory
3. Add the export to the relevant index.ts file
4. Update this README if adding new directories

## Theme System

The application uses a centralized theme system located in `styles/themes/`:
- `colors.ts` - Color definitions for light/dark modes
- `typography.ts` - Font families, sizes, and weights
- `spacing.ts` - Spacing, border radius, and shadow definitions

## Services

External integrations are handled through the services layer:
- `api/` - HTTP requests and API communication
- `storage/` - Local data persistence
- Each service should be properly typed and error-handled
