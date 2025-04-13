import { globalStyle } from '@vanilla-extract/css';
import { themeClass } from './theme.css';

globalStyle('html, body', {
  fontFamily: 'Pretendard, sans-serif',
  backgroundColor: '#F9FAFB',
  color: '#1F2D3D',
  lineHeight: 1.6,
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle(`${themeClass} a`, {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
});
