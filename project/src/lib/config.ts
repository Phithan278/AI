// Configuration file for all service integrations
// This centralizes all configuration and provides type safety

export const config = {
  // Supabase Configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },

  // RevenueCat Configuration
  revenuecat: {
    publicKey: import.meta.env.VITE_REVENUECAT_PUBLIC_KEY || '',
    // Secret key should only be used in server-side functions
  },

  // Algorand Configuration
  algorand: {
    nodeUrl: import.meta.env.VITE_ALGORAND_NODE_URL || 'https://testnet-api.algonode.cloud',
    nodeToken: import.meta.env.VITE_ALGORAND_NODE_TOKEN || '',
    indexerUrl: import.meta.env.VITE_ALGORAND_INDEXER_URL || 'https://testnet-idx.algonode.cloud',
    apiKey: import.meta.env.VITE_ALGORAND_API_KEY || '',
  },

  // Tavus AI Configuration
  tavus: {
    apiKey: import.meta.env.VITE_TAVUS_API_KEY || '',
    baseUrl: 'https://tavusapi.com',
  },

  // ElevenLabs Configuration
  elevenlabs: {
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY || '',
    baseUrl: 'https://api.elevenlabs.io',
  },

  // Reddit API Configuration
  reddit: {
    clientId: import.meta.env.VITE_REDDIT_CLIENT_ID || '',
    redirectUri: import.meta.env.VITE_REDDIT_REDIRECT_URI || '',
    // Client secret should only be used in server-side functions
  },

  // App Configuration
  app: {
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
    environment: import.meta.env.NODE_ENV || 'development',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  },

  // Optional Analytics
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    mixpanelToken: import.meta.env.VITE_MIXPANEL_TOKEN || '',
    sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
  },
};

// Type definitions for better TypeScript support
export type Config = typeof config;

// Validation function to check if required environment variables are set
export const validateConfig = () => {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
    console.warn(
      'Please check your .env file and ensure all required variables are set.'
    );
  }

  return missingVars.length === 0;
};

// Helper function to check if we're in development mode
export const isDevelopment = () => config.app.environment === 'development';

// Helper function to check if we're in production mode
export const isProduction = () => config.app.environment === 'production';

export default config;