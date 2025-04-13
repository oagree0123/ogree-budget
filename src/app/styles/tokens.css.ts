// styles/tokens.css.ts
import { createGlobalThemeContract } from '@vanilla-extract/css';

export const tokens = createGlobalThemeContract({
  color: {
    background: 'color-background',
    text: 'color-text',
    primary: 'color-primary',
    secondary: 'color-secondary',
    emotion: 'color-emotion',
  },
  fontSize: {
    sm: 'font-size-sm',
    base: 'font-size-base',
    lg: 'font-size-lg',
    xl: 'font-size-xl',
  },
  fontWeight: {
    regular: 'font-weight-regular',
    medium: 'font-weight-medium',
    bold: 'font-weight-bold',
  },
  radius: {
    sm: 'radius-sm',
    md: 'radius-md',
    lg: 'radius-lg',
  },
  space: {
    xs: 'space-xs',
    sm: 'space-sm',
    md: 'space-md',
    lg: 'space-lg',
    xl: 'space-xl',
  },
});
