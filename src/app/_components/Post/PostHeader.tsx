import Image from 'next/image';
import { dateInYyyyMmDdHhMmSs } from '../../utils/date/formate';

type PostHeaderInfo = {
  title: string;
  author: string;
  authorProfilePicture: string;
  publishDate: Date;
  updateDate: Date;
};
// eslint-disable-next-line react/display-name
export default function PostHeader({
  title,
  author,
  authorProfilePicture,
  publishDate,
  updateDate,
}: PostHeaderInfo) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h5 className="self-center text-4xl  font-bold"> {title} </h5>
      <p className="flex flex-col justify-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {authorProfilePicture && (
          <span className="flex flex-row gap-2">
            <Image
              className="rounded-full"
              src={authorProfilePicture || ''}
              width={40}
              height={50}
              alt="profile image"
            />
            <div className="flex flex-col">
              {author}
              <span>{dateInYyyyMmDdHhMmSs(publishDate)}</span>
            </div>
          </span>
        )}

        {updateDate && (
          <span className="italic ">
            Updated : <span>{dateInYyyyMmDdHhMmSs(publishDate)}</span>
          </span>
        )}
      </p>
    </div>
  );
}
