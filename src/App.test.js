import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select text', () => {
  render(<App />);
  const linkElement = screen.getByText(/I'm in the mood for/i);
  expect(linkElement).toBeInTheDocument();
});
