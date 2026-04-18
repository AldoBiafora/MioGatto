export const fontFamily = {
  heading: 'Quicksand_600SemiBold',
  headingBold: 'Quicksand_700Bold',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodyBold: 'Inter_700Bold',
} as const;

export const typography = {
  h1: { fontFamily: fontFamily.headingBold, fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: fontFamily.heading, fontSize: 24, lineHeight: 30 },
  h3: { fontFamily: fontFamily.heading, fontSize: 20, lineHeight: 26 },
  body: { fontFamily: fontFamily.body, fontSize: 16, lineHeight: 24 },
  bodyBold: { fontFamily: fontFamily.bodyBold, fontSize: 16, lineHeight: 24 },
  label: { fontFamily: fontFamily.bodyMedium, fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: fontFamily.body, fontSize: 12, lineHeight: 16 },
} as const;

export type Typography = typeof typography;
export type TypographyVariant = keyof Typography;
export type FontFamily = typeof fontFamily;
