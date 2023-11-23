'use client';

import { useRouter } from 'next/navigation';
import PostHeader from './PostHeader';

const parse = require('html-react-parser');

const Post = ({ id, title, content, author, additionalInfo }: any) => {
  const router = useRouter();

  const redirectToPostDetail = () => {
    router.push('/post/read/' + id);
  };

  return (
    <div
      className="py-4 ml-4 w-full h-full	
       max-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={redirectToPostDetail}
    >
      <PostHeader
        author={author}
        title={title}
        {...additionalInfo?.additionalInfo}
      />
      <div className="overflow-clip mx-auto mb-3 font-normal text-gray-700 dark:text-gray-400">
        {parse(content.substr(0, 200))} ... see more
      </div>
    </div>
  );
};

export { Post };
