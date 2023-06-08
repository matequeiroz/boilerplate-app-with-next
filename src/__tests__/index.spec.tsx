import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from '../app/page';

describe('<Home />', () => {
  it('shloud be render home page', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument()
  });
});
