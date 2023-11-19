import { headers } from 'next/headers';
import { PostDetail } from '@/src/app/_components/Post/PostDetail';

async function getPostById(postId: string) {
  'use server';
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  let res = await fetch(`${protocal}://${host}/api/post/${postId}`, {
    cache: 'force-cache',
  });
  return await res.json();
}

const PostById = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params?.postId);
  return <PostDetail {...post} />;
};

export default PostById;
