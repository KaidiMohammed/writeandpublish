'use client';

import { useState } from 'react';

const parse = require('html-react-parser');

const Post = ({ title, content, author }: any) => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="w-2/3 ml-4 flex flex-col items-start justify-center max-w-2xl p-11 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5
          onClick={() => setIsSeeMore(!isSeeMore)}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          By : {author}
        </p>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {!isSeeMore && parse(content.substr(0, 200))}
        {content.length > 200 && !isSeeMore && (
          <a onClick={() => setIsSeeMore(!isSeeMore)}> see more... </a>
        )}
        {isSeeMore && parse(content)}
      </div>
    </div>
  );
};

export { Post };
