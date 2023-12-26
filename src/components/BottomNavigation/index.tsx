import IconButton from '@components/IconButton';

import { githubIcon, vscodeIcon } from '@assets';

import { bottomNavigationStyle } from './index.css';

export default function BottomNavigation() {
  return (
    <div className={bottomNavigationStyle}>
      <IconButton src={vscodeIcon} href="vscode:///?windowId=_blank" />
      <IconButton src={githubIcon} href="https://github.com" />
    </div>
  );
}
