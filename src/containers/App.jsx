import React, { PureComponent } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Table from '../components/Table';

import { requestData, Promise_all } from '../helpers';

@observer
export default class App extends PureComponent {
	render() {
		return (
			<div>
				<div>
					<button onClick={this.fetchData}>Fetch data</button>
				</div>
				<Table {...this.props} />
			</div>
		);
	}

	@action
	fetchData = async () => {
		const { store } = this.props;
		const promises = store.gitLogs.map(log => requestData({ url: `http://127.0.0.1:1337/issues/${log.id}.json` }));
		const responses = await Promise_all(promises);

		store.addIssue(responses);
	};
}