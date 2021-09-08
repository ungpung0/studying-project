import { render, screen } from '@testing-library/react';
import AppChapter2 from './chapter-2/AppChapter2';

test('renders learn react link', () => {
  render(<AppChapter2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
