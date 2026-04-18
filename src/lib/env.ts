import Constants from 'expo-constants';

type Extra = {
  supabaseUrl?: string;
  supabaseAnonKey?: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as Extra;

function required(value: string | undefined, key: string): string {
  const fromEnv = value ?? process.env[key];
  if (!fromEnv) {
    throw new Error(
      `Missing required environment variable: ${key}. Copy .env.example to .env and fill in the Supabase credentials.`,
    );
  }
  return fromEnv;
}

export const env = {
  supabaseUrl: required(extra.supabaseUrl, 'EXPO_PUBLIC_SUPABASE_URL'),
  supabaseAnonKey: required(extra.supabaseAnonKey, 'EXPO_PUBLIC_SUPABASE_ANON_KEY'),
} as const;

export type Env = typeof env;
