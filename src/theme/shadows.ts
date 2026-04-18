import { Platform, type ViewStyle } from 'react-native';

const ios = (offsetY: number, radius: number, opacity: number): ViewStyle => ({
  shadowColor: '#2B2620',
  shadowOffset: { width: 0, height: offsetY },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

const android = (elevation: number): ViewStyle => ({ elevation });

export const shadows = {
  none: Platform.select({ ios: ios(0, 0, 0), android: android(0), default: {} }),
  sm: Platform.select({ ios: ios(1, 2, 0.06), android: android(1), default: {} }),
  md: Platform.select({ ios: ios(2, 6, 0.08), android: android(3), default: {} }),
  lg: Platform.select({ ios: ios(4, 12, 0.12), android: android(6), default: {} }),
} as const;

export type Shadows = typeof shadows;
export type ShadowKey = keyof Shadows;
