import { useState } from 'react';

import { typescriptLanguage } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import ReactCodeMirror from '@uiw/react-codemirror';

import ResultView from './ResultView';

import { codeEditorStyle, sketchNoteStyle } from './index.css';

const vscodeTheme = vscodeDarkInit({
  settings: {
    fontFamily: 'Cascadia Code',
  },
});

export default function SketchNote() {
  const [code, setCode] = useState('');

  return (
    <div className={sketchNoteStyle}>
      <ReactCodeMirror
        className={codeEditorStyle}
        value={code}
        extensions={[typescriptLanguage]}
        placeholder="'sketchpad';"
        onChange={setCode}
        theme={vscodeTheme}
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
