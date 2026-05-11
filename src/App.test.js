import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio shell', () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByText(/^devfolio$/i)).toBeInTheDocument();
});
