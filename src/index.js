import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';

import App from './containers/App';
import IssueListModel from './models/IssueListModel';
import TodoModel from './models/TodoModel';

const store = new IssueListModel();

render(
	<div>
		<DevTools />
		<App store={store} />
	</div>,
	document.getElementById('root')
);

// playing around in the console
window.store = store;
