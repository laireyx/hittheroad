import { useCallback } from 'react';

import useExecutionResult from './useExecutionResult';

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
  const result = useExecutionResult(code);

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
