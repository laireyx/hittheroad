import BottomNavigation from '@components/BottomNavigation';
import MainArea from '@components/MainArea';

import { dashboardStyle } from './index.css';

export default function Dashboard() {
  return (
    <div className={dashboardStyle}>
      <MainArea />
      <BottomNavigation />
    </div>
  );
}
