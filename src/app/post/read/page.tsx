import { Post } from '@/src/app/_components/post/post';
import { headers } from 'next/headers';

export default async function Page() {
  const posts = await getPosts();
  const postsElement = posts?.map((post: any) => (
    <Post key={post.id} {...post} />
  ));

  return (
    <>
      <div className="flex  justify-center gap-10 flex-wrap mr-5  mt-5">
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
    cache: 'force-cache',
  });
  return await res.json();
}
