import { useAuth } from './useAuth';

export function useSignUp() {
  const { signUp, loading } = useAuth();
  return { signUp, loading };
}
