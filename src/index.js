const arr = [1, 2, 3];
const result = () => console.log(...arr);
// check console - Destructuring assignment is a cool feature that came along with ES6
result();

import bsStyles from 'bootstrap/dist/css/bootstrap.min.css';
import appStyles from './styles/styles.scss';

import 'bootstrap';
import App from './App';

module.hot.accept();
