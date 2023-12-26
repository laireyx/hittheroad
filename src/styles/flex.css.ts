import { style } from '@vanilla-extract/css';

export const flexStyle = style({
  display: 'flex',
  gap: 24,
});

export const flexRowStyle = style([
  flexStyle,
  {
    flexDirection: 'row',
  },
]);

export const flexColStyle = style([
  flexStyle,
  {
    flexDirection: 'column',
  },
]);
