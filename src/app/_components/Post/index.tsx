'use client';
const parse = require('html-react-parser');

const Post = ({ title, content, author }: any) => {
  return (
    <div className="w-2/3 ml-4 flex flex-col justify-center max-w-2xl p-11 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {parse(content)}
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Author : {author}
      </p>
    </div>
  );
};

export { Post };
