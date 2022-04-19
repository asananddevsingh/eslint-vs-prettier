import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('appRoot');
const root = createRoot(container);
root.render(<App />);

const Unused = 10;

var foo = {
  bar: 10,
  '1var': 'CS 101',
};

// If you run `npm run lint:fix`, it will change code foo["bar"] to foo.bar. But won't change the 1var property as that is invalid name.
// console.log(foo["bar"], foo["1var"]);
console.log(foo['bar'], foo['1var']);
