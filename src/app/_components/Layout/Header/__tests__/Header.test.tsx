import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....
import { useSession, signOut } from 'next-auth/react';

import { Header } from '../Header';

// global prapare
// awlays start by mocking (or creating fakes) of the objects that we want to test

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

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders Header component and displays logout when user is connected', () => {
    // act
    const { getByText } = render(<Header />);

    //expect
    expect(getByText('Write & publish')).toBeInTheDocument();
    expect(getByText('Log out')).toBeInTheDocument();
  });

  it('renders Header component and displays login when user is not connected', () => {
    // prapare
    //@ts-ignore
    useSession.mockReturnValue(() => {
      // ovverides the default mock function
      return { data: [], status: 'authenticated' };
    });
    // act
    const { getByText } = render(<Header />);

    //expect
    expect(getByText('Write & publish')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
