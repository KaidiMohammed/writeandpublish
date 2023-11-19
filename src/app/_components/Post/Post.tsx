'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { dateInYyyyMmDdHhMmSs } from '../../utils/date/formate';
import { useRouter } from 'next/navigation';

const parse = require('html-react-parser');

const Post = ({ id, title, content, author, additionalInfo }: any) => {
  const router = useRouter();

  const redirectToPostDetail = () => {
    router.push('/post/read/' + id);
  };

  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div
      className="py-4 ml-4 w-full h-full	
     flex flex-col items-start justify-center max-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onClick={redirectToPostDetail}
    >
      <a href="#">
        <h2
          onClick={() => setIsSeeMore(!isSeeMore)}
          className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {title}
        </h2>
        <p className="flex flex-col justify-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {additionalInfo?.additionalInfo?.authorProfilePicture && (
            <span className="flex flex-row gap-2">
              <Image
                className="rounded-full"
                src={additionalInfo?.additionalInfo?.authorProfilePicture || ''}
                width={30}
                height={50}
                alt="profile image"
              />
              {author}
            </span>
          )}
          <span className="italic ">
            <i>
              Published on :
              {dateInYyyyMmDdHhMmSs(
                additionalInfo?.additionalInfo?.publishDate,
              )}
            </i>
          </span>
          {additionalInfo?.additionalInfo?.updateDate && (
            <span className="italic ">
              Updated : {additionalInfo?.additionalInfo?.updateDate}
            </span>
          )}
        </p>
      </a>
      <div className="w-full overflow-clip mb-3 font-normal text-gray-700 dark:text-gray-400">
        {parse(content.substr(0, 200))} ... see more
      </div>
    </div>
  );
};

export { Post };
