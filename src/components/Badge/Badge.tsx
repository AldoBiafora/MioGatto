import { View, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';

export type BadgeTone = 'info' | 'warning' | 'danger' | 'success' | 'neutral';

export type BadgeProps = {
  label: string;
  tone?: BadgeTone;
};

export function Badge({ label, tone = 'neutral' }: BadgeProps) {
  const theme = useTheme();

  const toneMap: Record<BadgeTone, { bg: string; fg: string }> = {
    info: { bg: theme.colors.info, fg: theme.colors.onPrimary },
    warning: { bg: theme.colors.warning, fg: theme.colors.onPrimary },
    danger: { bg: theme.colors.danger, fg: theme.colors.onPrimary },
    success: { bg: theme.colors.success, fg: theme.colors.onPrimary },
    neutral: { bg: theme.colors.surfaceAlt, fg: theme.colors.textSecondary },
  };

  const { bg, fg } = toneMap[tone];
  const style: ViewStyle = {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radii.pill,
    backgroundColor: bg,
    alignSelf: 'flex-start',
  };

  return (
    <View style={style}>
      <Text variant="caption" color={fg}>
        {label}
      </Text>
    </View>
  );
}
