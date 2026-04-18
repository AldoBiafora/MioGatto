import { Stack } from 'expo-router';
import { useTheme } from '@/theme';

export default function DiarioLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Diario' }} />
      <Stack.Screen name="[id]" options={{ title: 'Momento' }} />
    </Stack>
  );
}
