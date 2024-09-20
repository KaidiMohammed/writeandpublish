'use client';
const parse = require('html-react-parser');
import PostHeader from './PostHeader';

export const PostDetail = ({
  id,
  title,
  author,
  content,
  additionalInfo,
}: any) => {
  console.log(content);
  return (
    <div className="flex flex-col items-center gap-5">
      <PostHeader
        author={author}
        title={title}
        {...additionalInfo?.additionalInfo}
      />
      <div className="break-words p-5 m-auto self-center max-w-lg  mb-3 font-normal text-gray-700 dark:text-gray-400">
        {parse(content)}
      </div>
    </div>
  );
};
