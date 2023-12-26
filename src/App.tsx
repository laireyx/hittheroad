import { Suspense, lazy } from 'react';

import LoadingFallback from '@components/LoadingFallback';

const Dashboard = lazy(() => import('@components/Dashboard'));

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Dashboard />
    </Suspense>
  );
}
