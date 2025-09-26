// Type definitions
export interface AppConfig {
  name: string;
  version: string;
  environment: 'development' | 'production' | 'staging';
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
}

// Add more type definitions as needed
