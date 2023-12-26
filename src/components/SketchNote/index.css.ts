import { globalStyle, style } from '@vanilla-extract/css';

import { roundBorderStyle } from '@styles/border.css';
import { flexColStyle } from '@styles/flex.css';
import { surfaceStyle } from '@styles/surface.css';

const sketchNoteStyle = style([
  roundBorderStyle,
  surfaceStyle,
  flexColStyle,
  { flex: 1, padding: 12 },
]);

const codeEditorStyle = style([{ textAlign: 'initial' }]);

globalStyle(`${codeEditorStyle} > div`, {
  outline: 'none !important',
});

export { sketchNoteStyle, codeEditorStyle };
