import {render, screen} from '@testing-library/react';
import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">any</LinkWrapper>)

    const children = screen.getByText(/any/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  });
});
