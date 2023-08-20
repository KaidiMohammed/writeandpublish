import { Quill } from './components/TextEditors/Quill';
import { Post } from './components/post';
import { headers } from 'next/headers';

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <Quill />
      </main>
      <div className="flex flex-row justify-center gap-10 flex-wrap mr-5">
        {posts?.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

async function getPosts() {
  'use server';
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  let res = await fetch(`${protocal}://${host}/api/post/get`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
