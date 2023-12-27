import { useEffect, useState } from 'react';

import { typescriptLanguage } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';

import ResultView from './ResultView';

import { codeEditorStyle, sketchNoteStyle } from './index.css';
import { readFromClipboard } from '../../utils/clipboard';

const vscodeTheme = vscodeDarkInit({
  settings: {
    fontFamily: `'Cascadia Code', ui-monospace, monospace, sans-serif`,
  },
});

export default function SketchNote() {
  const [code, setCode] = useState('');

  useEffect(() => {
    if (code.toLowerCase() === 'rrr') {
      readFromClipboard().then((url) => (location.href = url));
    }
  }, [code]);

  return (
    <div className={sketchNoteStyle}>
      <ReactCodeMirror
        className={codeEditorStyle}
        value={code}
        extensions={[typescriptLanguage]}
        placeholder="'sketchpad';"
        onChange={setCode}
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
