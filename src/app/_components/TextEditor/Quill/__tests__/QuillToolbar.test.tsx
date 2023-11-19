import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import { QuillToolbar } from '../QuillToolbar';

describe('QuillToolbar', () => {
  it('renders QuillToolbar component', () => {
    // prapare

    // act
    const { getByText } = render(<QuillToolbar />);

    //expect
    expect(getByText('Arial')).toBeInTheDocument();
  });
});
