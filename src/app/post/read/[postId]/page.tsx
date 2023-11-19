import Image from 'next/image';
const parse = require('html-react-parser');
import { dateInYyyyMmDdHhMmSs } from '@/src/app/utils/date/formate';
import { headers } from 'next/headers';

async function getPosts() {
  'use server';
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  let res = await fetch(`${protocal}://${host}/api/post/77`, {
    cache: 'no-cache',
  });
  return await res.json();
}

const PostDetail = async ({ params }: { params: { postId: string } }) => {
  const posts = await getPosts();

  // useEffect(() => {}, [params.postId]);

  return (
    <>cc {params.postId}</>
    // <div className="flex flex-row">
    //   <h1> {title} </h1>
    //   <p className="flex flex-col justify-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
    //     {additionalInfo?.additionalInfo?.authorProfilePicture && (
    //       <span className="flex flex-row gap-2">
    //         <Image
    //           className="rounded-full"
    //           src={additionalInfo?.additionalInfo?.authorProfilePicture || ''}
    //           width={30}
    //           height={50}
    //           alt="profile image"
    //         />
    //         {author}
    //       </span>
    //     )}
    //     <span className="italic ">
    //       <i>
    //         Published at :
    //         {dateInYyyyMmDdHhMmSs(additionalInfo?.additionalInfo?.publishDate)}
    //       </i>
    //     </span>
    //     {additionalInfo?.additionalInfo?.updateDate && (
    //       <span className="italic ">
    //         Updated : {additionalInfo?.additionalInfo?.updateDate}
    //       </span>
    //     )}
    //   </p>
    //   <div className="w-full overflow-clip mb-3 font-normal text-gray-700 dark:text-gray-400">
    //     {parse(content.substr(0, 200))} ... see more
    //   </div>
    // </div>
  );
};

export default PostDetail;
