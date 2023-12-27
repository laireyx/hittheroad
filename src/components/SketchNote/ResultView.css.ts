import { roundBorderStyle, transparentBorderStyle } from '@styles/border.css';
import { flexRowStyle } from '@styles/flex.css';
import { style } from '@vanilla-extract/css';

export const resultViewStyle = style([
  flexRowStyle,
  {
    lineBreak: 'anywhere',
    whiteSpaceCollapse: 'preserve',
    textWrap: 'nowrap',
  },
]);

export const resultTextStyle = style([
  roundBorderStyle,
  {
    flex: '1 0 auto',
    background: 'black',
    color: 'white',
    margin: 0,
    padding: '12px',
  },
  {
    textAlign: 'left',
  },
]);

export const resultCopyButtonStyle = style([
  transparentBorderStyle,
  roundBorderStyle,
  {
    background: 'white',
    margin: 0,
    padding: '12px',
  },
  {
    fontFamily: 'system-ui, ui-sans-serif, sans-serif',
    fontSize: '1em',
    fontWeight: 'bold',
  },
]);
