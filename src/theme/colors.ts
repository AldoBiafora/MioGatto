export const palette = {
  ocher50: '#FBF2E6',
  ocher100: '#F5E0C3',
  ocher300: '#E8B878',
  ocher500: '#D99758',
  ocher700: '#A96D33',
  ocher900: '#5E3A14',

  sage100: '#E4EBE1',
  sage300: '#AEC2A3',
  sage500: '#7E9A71',
  sage700: '#4E6644',

  dust100: '#E2E8EC',
  dust300: '#A7BAC4',
  dust500: '#6F8A98',
  dust700: '#3F5763',

  cream50: '#FAF6EF',
  cream100: '#F3ECE0',
  cream200: '#E8DECB',

  warmGray300: '#C9BFB2',
  warmGray500: '#8C8277',
  warmGray700: '#574F46',
  warmGray900: '#2B2620',

  coral400: '#F07A6A',
  coral600: '#C84A39',
} as const;

export const colors = {
  background: palette.cream50,
  surface: palette.cream100,
  surfaceAlt: palette.cream200,
  border: palette.warmGray300,

  textPrimary: palette.warmGray900,
  textSecondary: palette.warmGray700,
  textMuted: palette.warmGray500,

  primary: palette.ocher500,
  primaryPressed: palette.ocher700,
  onPrimary: palette.cream50,

  secondary: palette.sage500,
  secondaryAlt: palette.dust500,

  info: palette.dust500,
  success: palette.sage700,
  warning: palette.ocher700,
  danger: palette.coral600,
  dangerSoft: palette.coral400,

  overlay: 'rgba(43, 38, 32, 0.5)',
} as const;

export type Colors = typeof colors;
