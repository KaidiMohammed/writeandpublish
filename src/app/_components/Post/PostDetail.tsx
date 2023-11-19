import Image from 'next/image';
const parse = require('html-react-parser');
import { dateInYyyyMmDdHhMmSs } from '../../utils/date/formate';

export const PostDetail = ({
  id,
  title,
  author,
  content,
  additionalInfo,
}: any) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h5 className="self-center text-4xl font-extralight"> {title} </h5>
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
            Published on
            {dateInYyyyMmDdHhMmSs(additionalInfo?.additionalInfo?.publishDate)}
          </i>
        </span>
        {additionalInfo?.additionalInfo?.updateDate && (
          <span className="italic ">
            Updated : {additionalInfo?.additionalInfo?.updateDate}
          </span>
        )}
      </p>
      <div className="self-center mx-auto  overflow-x-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">
        {parse(content)}
      </div>
    </div>
  );
};
