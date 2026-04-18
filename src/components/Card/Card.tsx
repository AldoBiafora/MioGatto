import { View, type ViewProps, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme';

export type CardProps = ViewProps & {
  padded?: boolean;
};

export function Card({ padded = true, style, children, ...rest }: CardProps) {
  const theme = useTheme();
  const base: ViewStyle = {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.lg,
    padding: padded ? theme.spacing.lg : 0,
    ...theme.shadows.sm,
  };
  return (
    <View style={[base, style]} {...rest}>
      {children}
    </View>
  );
}
