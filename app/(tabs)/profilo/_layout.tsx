import { Stack } from 'expo-router';
import { useTheme } from '@/theme';

export default function ProfiloLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Profilo' }} />
      <Stack.Screen name="modifica" options={{ title: 'Modifica profilo' }} />
    </Stack>
  );
}
