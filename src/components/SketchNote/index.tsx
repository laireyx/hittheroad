import React, { useCallback, useState } from 'react';

import { typescriptLanguage } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';

import ResultView from './ResultView';

import { codeEditorStyle, sketchNoteStyle } from './index.css';

const vscodeTheme = vscodeDarkInit({
  settings: {
    fontFamily: `'Cascadia Code', ui-monospace, monospace, sans-serif`,
  },
});

export default function SketchNote() {
  const [code, setCode] = useState('');

  const onPasteCapture = useCallback(
    (e: React.ClipboardEvent<HTMLDivElement>) => {
      if (code.length > 0) return;

      const text = e.clipboardData.getData('text/plain');

      // Try URL
      try {
        new URL(text);
        console.log('location.href');
        location.href = text;
      } catch (_) {}
    },
    [code],
  );

  return (
    <div className={sketchNoteStyle}>
      <ReactCodeMirror
        className={codeEditorStyle}
        value={code}
        extensions={[typescriptLanguage]}
        placeholder="'sketchpad';"
        onChange={setCode}
        onPasteCapture={onPasteCapture}
        theme={vscodeTheme}
        autoFocus={true}
        basicSetup={{
          highlightActiveLineGutter: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          highlightActiveLine: true,
        }}
      />
      <ResultView code={code} />
    </div>
  );
}
