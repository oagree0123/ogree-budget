// styles/theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { tokens } from './tokens.css';

export const themeClass = createGlobalTheme(':root', tokens, {
  color: {
    background: '#F9FAFB',
    text: '#1F2D3D',
    primary: '#4A6CFD',
    secondary: '#AEB8C4',
    emotion: '#FFB400',
  },
  fontSize: {
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '20px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
});
