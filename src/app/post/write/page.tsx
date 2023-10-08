'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// import { headers } from 'next/headers';

import { BsFillPencilFill } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

import Button from '../../_components/Button';
import Toast from '../../_components/Toast';

const Editor = dynamic(() => import('../../_components/TextEditor/Quill'), {
  ssr: false,
});

export default function Page() {
  const [content, setEditorContent] = useState('');
  const [publishState, setPublishState] = useState({
    success: false,
    error: false,
  });

  const setContent = (content: any) => {
    console.log(content);
    setEditorContent(content);
  };

  async function publishPost() {
    const host = window.location.host;
    const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
    let res = await fetch(`${protocal}://${host}/api/post`, {
      cache: 'force-cache',
      method: 'POST',
      body: JSON.stringify({
        post: {
          title: 'hello',
          content: content,
          author: 'Mohammed',
        },
      }),
    });
    await res.json();
    setPublishState({ ...publishState, success: true });
  }

  return (
    <>
      <div className="flex flex-col m-5 ">
        <div>
          <Editor getContent={(content: any) => setContent(content)} />
          {publishState.success && <Toast success />}
          {publishState.error && <Toast error />}
        </div>
        <div className="flex justify-between mt-5 flex-wrap">
          <Button
            primary
            rounded
            className="flex justify-center"
            onClick={async () => await publishPost()}
          >
            <span> Publish </span>
            <TbSend />
          </Button>
          <Button disabled secondary rounded className="flex justify-center">
            Save as draft
            <BsFillPencilFill />
          </Button>
        </div>
      </div>
    </>
  );
}
