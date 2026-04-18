import { Text as RNText, type TextProps as RNTextProps, type TextStyle } from 'react-native';
import { useTheme } from '@/theme';
import type { TypographyVariant } from '@/theme';

export type TextProps = RNTextProps & {
  variant?: TypographyVariant;
  color?: string;
  align?: TextStyle['textAlign'];
};

export function Text({
  variant = 'body',
  color,
  align,
  style,
  children,
  ...rest
}: TextProps) {
  const theme = useTheme();
  const baseStyle: TextStyle = {
    ...theme.typography[variant],
    color: color ?? theme.colors.textPrimary,
    textAlign: align,
  };

  return (
    <RNText style={[baseStyle, style]} {...rest}>
      {children}
    </RNText>
  );
}
