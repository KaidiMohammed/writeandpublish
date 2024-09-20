import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import Button from '../Button';

describe('Button', () => {
  it('renders Button component', () => {
    // act
    const { getByText } = render(<Button info> Click me !</Button>);

    //expect
    expect(getByText('Click me !')).toBeInTheDocument();
  });
});
