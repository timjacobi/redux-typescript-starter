import { createElement } from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import setupStore from './setupStore';

const store: Redux.Store<object> = setupStore();

render(createElement(Root, { store }), document.querySelector('#app'));