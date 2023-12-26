import { style } from '@vanilla-extract/css';

import { roundBorderStyle } from '@styles/border.css';
import { flexRowStyle } from '@styles/flex.css';
import { surfaceStyle } from '@styles/surface.css';

export const bottomNavigationStyle = style([
  roundBorderStyle,
  surfaceStyle,
  flexRowStyle,
  {
    marginTop: 'auto',
    justifyContent: 'space-evenly',
    padding: 12,
  },
]);
