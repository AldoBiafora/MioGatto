import { Image, View, type ImageSourcePropType, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from '../Text';

export type AvatarSize = 'sm' | 'md' | 'lg';

export type AvatarProps = {
  source?: ImageSourcePropType;
  initials?: string;
  size?: AvatarSize;
};

const SIZE_MAP: Record<AvatarSize, number> = { sm: 32, md: 48, lg: 72 };

export function Avatar({ source, initials, size = 'md' }: AvatarProps) {
  const theme = useTheme();
  const dim = SIZE_MAP[size];

  const container: ViewStyle = {
    width: dim,
    height: dim,
    borderRadius: dim / 2,
    backgroundColor: theme.colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  if (source) {
    return (
      <View style={container}>
        <Image source={source} style={{ width: dim, height: dim }} />
      </View>
    );
  }

  return (
    <View style={container}>
      <Text variant="label" color={theme.colors.textSecondary}>
        {initials ?? '?'}
      </Text>
    </View>
  );
}
