import { style } from '@vanilla-extract/css';

import { flexRowStyle } from '@styles/flex.css';

export const mainAreaStyle = style([flexRowStyle, { flex: '1 0 auto' }]);
