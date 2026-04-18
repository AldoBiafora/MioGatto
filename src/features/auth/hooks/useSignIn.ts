import { useAuth } from './useAuth';

export function useSignIn() {
  const { signIn, loading } = useAuth();
  return { signIn, loading };
}
