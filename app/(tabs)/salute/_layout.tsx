import { Stack } from 'expo-router';
import { useTheme } from '@/theme';

export default function SaluteLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: { fontFamily: theme.fontFamily.heading },
        headerTintColor: theme.colors.textPrimary,
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Salute' }} />
      <Stack.Screen name="appuntamenti" options={{ title: 'Appuntamenti' }} />
      <Stack.Screen name="vaccini" options={{ title: 'Vaccini' }} />
      <Stack.Screen name="peso" options={{ title: 'Peso' }} />
    </Stack>
  );
}
