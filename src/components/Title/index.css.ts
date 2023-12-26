import { style } from '@vanilla-extract/css';

const titleCommonStyle = style({
  lineHeight: 1,
});

export const titleStyle = {
  h1: style([
    titleCommonStyle,
    {
      fontSize: '3.2em',
    },
  ]),
  h2: style([
    titleCommonStyle,
    {
      fontSize: '2.8em',
    },
  ]),
  h3: style([
    titleCommonStyle,
    {
      fontSize: '2.4em',
    },
  ]),
  h4: style([
    titleCommonStyle,
    {
      fontSize: '2em',
    },
  ]),
  h5: style([
    titleCommonStyle,
    {
      fontSize: '1.6em',
    },
  ]),
  h6: style([
    titleCommonStyle,
    {
      fontSize: '1.2em',
    },
  ]),
};
