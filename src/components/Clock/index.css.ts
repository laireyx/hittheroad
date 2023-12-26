import { style } from '@vanilla-extract/css';

import { roundBorderStyle } from '@styles/border.css';
import { surfaceStyle } from '@styles/surface.css';

export const clockBoxStyle = style([
  roundBorderStyle,
  surfaceStyle,
  { padding: 12 },
]);

export const clockStyle = style({
  fontFamily: 'monospace',
  fontWeight: 'bold',
  fontSize: '3em',
});
