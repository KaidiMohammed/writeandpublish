'use client';

import React from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';

import 'react-quill/dist/quill.snow.css';
import './styles.css';

export const Editor = () => {
  const [state, setState] = React.useState({ value: '' });
  const handleChange = (value: any) => {
    setState({ value });
  };

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'Write something awesome...'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
