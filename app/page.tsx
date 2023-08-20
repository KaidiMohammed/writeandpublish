import { Quill } from './components/TextEditors/Quill';
import { Post } from './components/post';

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <Quill />
      </main>
      <div className="flex flex-row items-end justify-center gap-10">
        {posts?.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

export async function getPosts() {
  const res = await fetch(process.env.HOST_URL + '/api/post/get', {
    next: { revalidate: 2 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
