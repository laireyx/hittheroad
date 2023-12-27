import { useCallback, useMemo } from 'react';

import stringifyObject from 'stringify-object';

import execute from './execute';

import {
  resultCopyButtonStyle,
  resultTextStyle,
  resultViewStyle,
} from './ResultView.css';
import { copyToClipboard } from '../../utils/clipboard';

interface ResulteViewProps {
  code: string;
}

export default function ResultView({ code }: ResulteViewProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const result = useMemo(() => {
    const executionResult = execute(code);

    if (executionResult instanceof Error) return executionResult.stack ?? '';
    return stringifyObject(executionResult);
  }, [code]);

  const copyResult = useCallback(() => {
    copyToClipboard(result);
  }, [result]);

  return (
    <div className={resultViewStyle}>
      <p className={resultTextStyle}>
        {result.slice(0, 100) + (result.length > 100 ? '...' : '')}
      </p>
      <button className={resultCopyButtonStyle} onClick={copyResult}>
        copy to clipboard
      </button>
    </div>
  );
}
