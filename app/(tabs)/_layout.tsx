import { View } from 'react-native';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';
import { CatSwitcher } from '@/components';
import { TABS } from '@/constants';

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <SafeAreaView edges={['top']} style={{ backgroundColor: theme.colors.background }}>
        <CatSwitcher />
      </SafeAreaView>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textMuted,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
          },
          tabBarLabelStyle: {
            fontFamily: theme.fontFamily.bodyMedium,
            fontSize: 11,
          },
        }}
      >
        {TABS.map(({ name, label, icon: Icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: label,
              tabBarIcon: ({ color, size }) => <Icon color={color} size={size} />,
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}
