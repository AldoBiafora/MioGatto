import { useAuth } from './useAuth';

export function useSignOut() {
  const { signOut } = useAuth();
  return { signOut };
}
