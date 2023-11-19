'use client';

import React from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './QuillToolbar';

import 'react-quill/dist/quill.snow.css';
import './styles.css';

export const Quill = ({ getContent }: any) => {
  return (
    <div className="text-editor ">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        onChange={getContent}
        placeholder={'Write something awesome...'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Quill;
