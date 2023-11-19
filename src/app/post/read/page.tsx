import { Post } from '@/src/app/_components/Post';
import { headers } from 'next/headers';

export default async function Page() {
  const posts = await getPosts();
  const postsElement = posts?.map((post: any) => (
    <Post key={post.id} {...post} />
  ));

  return (
    <>
      <div className="flex cursor-pointer justify-center items-center mx-auto gap-10 flex-wrap mt-5">
        {postsElement}
      </div>
    </>
  );
}

async function getPosts() {
  'use server';
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  let res = await fetch(`${protocal}://${host}/api/post`, {
    cache: 'no-cache',
  });
  return await res.json();
}
