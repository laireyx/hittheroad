import { style } from '@vanilla-extract/css';

import { flexStyle } from '@styles/flex.css';

export const containerStyle = style([
  flexStyle,
  {
    margin: '12px',
  },
]);
