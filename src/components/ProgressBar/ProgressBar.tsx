import { View, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme';

export type ProgressBarProps = {
  value: number;
  tone?: 'primary' | 'success' | 'danger';
};

export function ProgressBar({ value, tone = 'primary' }: ProgressBarProps) {
  const theme = useTheme();
  const clamped = Math.max(0, Math.min(1, value));

  const toneColor =
    tone === 'success'
      ? theme.colors.success
      : tone === 'danger'
        ? theme.colors.danger
        : theme.colors.primary;

  const track: ViewStyle = {
    height: 8,
    backgroundColor: theme.colors.surfaceAlt,
    borderRadius: theme.radii.pill,
    overflow: 'hidden',
  };
  const fill: ViewStyle = {
    width: `${clamped * 100}%`,
    height: '100%',
    backgroundColor: toneColor,
    borderRadius: theme.radii.pill,
  };

  return (
    <View style={track}>
      <View style={fill} />
    </View>
  );
}
