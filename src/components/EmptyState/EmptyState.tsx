import { View, type ViewStyle } from 'react-native';
import type { ReactNode } from 'react';
import { useTheme } from '@/theme';
import { Text } from '../Text';
import { Button } from '../Button';

export type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  icon,
  title,
  subtitle,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const theme = useTheme();

  const container: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    gap: theme.spacing.md,
  };

  return (
    <View style={container}>
      {icon ? <View>{icon}</View> : null}
      <Text variant="h3" align="center">
        {title}
      </Text>
      {subtitle ? (
        <Text variant="body" color={theme.colors.textSecondary} align="center">
          {subtitle}
        </Text>
      ) : null}
      {actionLabel && onAction ? (
        <Button label={actionLabel} onPress={onAction} variant="primary" />
      ) : null}
    </View>
  );
}
