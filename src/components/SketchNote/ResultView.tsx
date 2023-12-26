import { useMemo } from 'react';

import stringifyObject from 'stringify-object';

import execute from './execute';

import { resultViewStyle } from './ResultView.css';

interface ResulteViewProps {
  code: string;
}

export default function ResultView({ code }: ResulteViewProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const result = useMemo(() => execute(code), [code]);

  return (
    <div className={resultViewStyle}>
      {result instanceof Error ? result.stack : stringifyObject(result)}
    </div>
  );
}
