import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders Footer component', () => {
    // act
    const { getByText } = render(<Footer />);

    //expect
    expect(getByText('Contact')).toBeInTheDocument();
  });
});
