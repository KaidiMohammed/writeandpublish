import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // the library exposes toBeInTheDocument ....

import Portal from '../Portal';
import ReactDOM from 'react-dom';

describe('Portal', () => {
  beforeAll(() => {
    //@ts-ignore
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });
  it('renders Portal component', () => {
    // act

    const { getByText } = render(
      <Portal>
        <div> This is a modal </div>
      </Portal>,
    );

    //expect
    expect(getByText('This is a modal')).toBeInTheDocument();
  });
});
