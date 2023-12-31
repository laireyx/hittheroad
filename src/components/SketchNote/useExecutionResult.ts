import { transpile } from 'typescript';

import { useEffect, useMemo, useState } from 'react';
import stringifyObject from 'stringify-object';

export default function useExecutionResult(code: string) {
  const [result, setResult] = useState<unknown>(undefined);

  useEffect(() => {
    const executionHandle = setTimeout(() => {
      let executeTarget = code;

      if (executeTarget.startsWith(`'use ts'`)) {
        executeTarget = transpile(code);
      }

      try {
        setResult(eval(executeTarget));
      } catch (err) {
        setResult(err);
      }
    }, 200);

    return () => clearTimeout(executionHandle);
  }, [code]);

  // Return result as string
  return useMemo(() => {
    if (result instanceof Error) return result.stack ?? '';
    return stringifyObject(result);
  }, [result]);
}
