import { View, type ViewProps, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';

export type ScreenProps = ViewProps & {
  padded?: boolean;
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
};

export function Screen({
  padded = true,
  edges = ['top', 'bottom', 'left', 'right'],
  style,
  children,
  ...rest
}: ScreenProps) {
  const theme = useTheme();

  const safeStyle: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.background,
  };
  const contentStyle: ViewStyle = {
    flex: 1,
    paddingHorizontal: padded ? theme.spacing.lg : 0,
    paddingVertical: padded ? theme.spacing.md : 0,
  };

  return (
    <SafeAreaView style={safeStyle} edges={edges}>
      <View style={[contentStyle, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
}
