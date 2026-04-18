import { Pressable, type PressableProps, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {
  label: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export function Button({
  label,
  variant = 'primary',
  fullWidth,
  disabled,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const base: ViewStyle = {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: fullWidth ? 'stretch' : 'flex-start',
    opacity: disabled ? 0.5 : 1,
  };

  const byVariant: Record<ButtonVariant, ViewStyle> = {
    primary: { backgroundColor: theme.colors.primary },
    secondary: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    ghost: { backgroundColor: 'transparent' },
  };

  const labelColor =
    variant === 'primary' ? theme.colors.onPrimary : theme.colors.textPrimary;

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        base,
        byVariant[variant],
        pressed && variant === 'primary'
          ? { backgroundColor: theme.colors.primaryPressed }
          : null,
        pressed && variant !== 'primary' ? { opacity: 0.7 } : null,
      ]}
      {...rest}
    >
      <Text variant="label" color={labelColor}>
        {label}
      </Text>
    </Pressable>
  );
}
