import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import { Quill } from '../Quill';

describe('Quill', () => {
  it('renders Quill component', () => {
    // prapare

    // act
    const { getByText } = render(<Quill />);

    //expect
    expect(getByText('Arial')).toBeInTheDocument();
  });
});
