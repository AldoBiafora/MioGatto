import { Stack } from 'expo-router';
import { useTheme } from '@/theme';

export default function DispensaLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Dispensa' }} />
      <Stack.Screen name="scorte" options={{ title: 'Scorte' }} />
      <Stack.Screen name="budget" options={{ title: 'Budget' }} />
      <Stack.Screen name="lista-spesa" options={{ title: 'Lista della spesa' }} />
    </Stack>
  );
}
