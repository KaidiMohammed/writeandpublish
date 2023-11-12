'use client';

import dynamic from 'next/dynamic';
import { useReducer, useRef, useState } from 'react';

import { BsFillPencilFill } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

import Button from '../../_components/Button';
import Toast from '../../_components/Toast';
import { useSession } from 'next-auth/react';

const Editor = dynamic(() => import('../../_components/TextEditor/Quill'), {
  ssr: false,
  loading: () => (
    <p>The editor is loading ... it wont take long, promise ;) </p>
  ),
});

const initialState = { title: '', content: '' };
const reducer = (state: any, action: { type: string; payload: any }) => {
  if (action.type === 'setTitle') {
    return {
      ...state,
      title: action.payload,
    };
  }
  if (action.type === 'setContent') {
    return {
      ...state,
      content: action.payload,
    };
  }
};

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const titleContentRef = useRef<HTMLInputElement | null>(null);
  const [publishState, setPublishState] = useState({
    success: false,
    error: false,
  });
  const { data: session } = useSession();

  const setPostContent = (content: string) => {
    dispatch({ type: 'setContent', payload: content });
  };
  const setPostTitle = (title: any) => {
    dispatch({ type: 'setTitle', payload: title.target.value });
  };

  async function publishPost() {
    if (state.title.trim().length === 0) {
      titleContentRef?.current?.focus();
    } else {
      const host = window.location.host;
      const protocal =
        process?.env.NODE_ENV === 'development' ? 'http' : 'https';
      let res = await fetch(`${protocal}://${host}/api/post`, {
        cache: 'force-cache',
        method: 'POST',
        body: JSON.stringify({
          post: {
            title: state.title,
            content: state.content,
            author: session?.user?.name,
          },
        }),
      });
      const resWritePost = await res.json();
      setPublishState({
        ...publishState,
        success: resWritePost.success,
        error: !resWritePost.success,
      });
    }
  }

  return (
    <>
      <div className="flex flex-col m-5 ">
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              placeholder="Your title here "
              type="text"
              id="Title"
              required
              ref={titleContentRef}
              onChange={(title: any) => setPostTitle(title)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Content
          </label>
          <Editor getContent={(content: any) => setPostContent(content)} />
          {publishState.success && <Toast success />}
          {publishState.error && <Toast error />}
        </form>
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
