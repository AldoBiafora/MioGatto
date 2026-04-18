import { createContext, useMemo, type ReactNode } from 'react';

type Session = unknown | null;
type User = unknown | null;

export type AuthContextValue = {
  session: Session;
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const noop = async () => {
  /* wired in Phase 2 */
};

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  loading: false,
  signIn: noop,
  signUp: noop,
  signOut: noop,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = useMemo<AuthContextValue>(
    () => ({
      session: null,
      user: null,
      loading: false,
      signIn: noop,
      signUp: noop,
      signOut: noop,
    }),
    [],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
