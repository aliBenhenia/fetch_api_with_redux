import { sum ,sum2} from './math';
import App from "./App"
import { render,screen } from '@testing-library/react';
describe('sum function ', () => {
  test('adds two numbers together', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-2, 2)).toBe(0);
  });
});
describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.getByText('Search:');
  });
});