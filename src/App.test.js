import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn React App', () => {
  render(<App />);
  
  const TextInApp = screen.getByText("React App");
  expect(TextInApp).toBeInTheDocument();
  
});
