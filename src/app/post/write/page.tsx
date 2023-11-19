'use client';

import dynamic from 'next/dynamic';
import { useReducer, useRef, useState } from 'react';

import { BsFillPencilFill } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

import Button from '../../_components/Button/Button';
import Toast from '../../_components/Toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { initialState, reducer } from './state/reducer';
import { publishPostInOutSource } from './functions/publishPostInOutSource';

const Editor = dynamic(
  () => import('../../_components/TextEditor/Quill/Quill'),
  {
    ssr: false,
    loading: () => (
      <p> The editor is loading ... it wont take long, promise ;) </p>
    ),
  },
);

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const titleContentRef = useRef<HTMLInputElement | null>(null);
  const [publishState, setPublishState] = useState({
    success: false,
    error: false,
  });
  const { data: session } = useSession();
  const router = useRouter();

  const setPostContent = (content: string) => {
    dispatch({ type: 'setContent', payload: content });
  };
  const setPostTitle = (title: any) => {
    dispatch({ type: 'setTitle', payload: title.target.value });
  };

  async function publishPost(e: any) {
    if (state.title.trim().length === 0) {
      titleContentRef?.current?.focus();
    } else {
      const additionalInfo = {
        publishDate: new Date(),
        updateDate: null,
        authorProfilePicture: session?.user?.image,
      };
      const resWritePost = await publishPostInOutSource(
        state,
        session,
        additionalInfo,
      );
      setPublishState({
        ...publishState,
        success: resWritePost.success,
        error: !resWritePost.success,
      });
    }
    router.push('/post/read');
  }

  return (
    <>
      <div className="flex flex-col m-5 ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await publishPost(e);
          }}
        >
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
          <Editor
            getContent={(content: any) => {
              setPostContent(content);
            }}
          />
          {publishState.success && <Toast success />}
          {publishState.error && <Toast error />}

          <div className="flex justify-center mt-5 gap-2 flex-wrap">
            <Button
              primary
              rounded
              className="flex justify-center"
              type="submit"
            >
              <span> Publish </span>
              <TbSend />
            </Button>
            <Button
              disabled
              secondary
              rounded
              className="justify-center hidden"
            >
              Save as draft
              <BsFillPencilFill />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
