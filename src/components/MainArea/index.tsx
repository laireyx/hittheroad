import Indicators from '@components/Indicators';
import SketchNote from '@components/SketchNote';

import { mainAreaStyle } from './index.css';

export default function MainArea() {
  return (
    <div className={mainAreaStyle}>
      <Indicators />
      <SketchNote />
    </div>
  );
}
