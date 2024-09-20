import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import Toast from '../Toast';

describe('Toast', () => {
  it('renders success Toast component', () => {
    // act
    const { getByText } = render(<Toast success />);

    //expect
    expect(getByText('Item created successfully.')).toBeInTheDocument();
  });
  it('renders error Toast component', () => {
    // act
    const { getByText } = render(<Toast error />);

    //expect
    expect(getByText('Close')).toBeInTheDocument();
  });

  it('renders warning Toast component', () => {
    // act
    const { getByText } = render(<Toast warning />);

    //expect
    expect(getByText('Close')).toBeInTheDocument();
  });
});
