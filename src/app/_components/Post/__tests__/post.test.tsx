import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import { Post } from '..';

// global prapare
// awlays start by mocking (or creating fakes) of the objects that we want to test

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }: any) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
);

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'tester', image: 'image path' },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'authenticated' };
    }),
  };
});

describe('Post', () => {
  it('renders Post component', () => {
    // prapare
    const props = {
      title: 'test title',
      content: 'test content',
      author: 'test author',
      additionalInfo: {
        additionalInfo: {
          authorProfilePicture: 'profil image',
          publishDate: new Date(),
          updateDate: null,
        },
      },
    };

    // act
    const { getByText } = render(<Post {...props} />);
    // screen.debug(); displays the html of the component

    //expect
    expect(getByText('test title')).toBeInTheDocument();
    expect(getByText('test author')).toBeInTheDocument();
  });
});
