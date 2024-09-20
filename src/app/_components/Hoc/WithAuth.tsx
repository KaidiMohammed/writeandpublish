import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const withAuth = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const { data: session } = useSession();
    const router = useRouter();
    if (session?.user) return <Component {...props} />;
    router.push('/post/read');
  };
};
