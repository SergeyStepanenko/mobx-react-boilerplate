import React, { PureComponent } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { requestData, Promise_all } from '../helpers';
import Issue from '../components/Issue';
// import Table from '../components/Table';
import { Table } from 'react-bootstrap';

@observer
export default class App extends PureComponent {
	render() {
		return (
			<div>
				<div>
					<button onClick={this.fetchData}>Fetch data</button>
				</div>
				{/* <ul>
					{this.props.store.issues.map(issue => (
						<Issue key={issue.id} issue={issue} />
					))}
				</ul> */}
				<Table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Тип</th>
							<th>Название</th>
							<th>Статус</th>
							<th>Назначена</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.store.gitLogs.map(log => {
								return (
									<tr key={log.id}>
										<td>{log.id}</td>
										<td>{log.type}</td>
										<td>{log.subject}</td>
										<td>{log.status && log.status.name}</td>
										<td>{log.assigned_to && log.assigned_to.name}</td>
									</tr>
								);
							})
						}
					</tbody>
				</Table>
			</div>
		);
	}

	@action
	fetchData = async () => {

		const promises = this.props.store.gitLogs.map(log => requestData({ url: `http://127.0.0.1:1337/issues/${log.id}.json` }));
		const responses = await Promise_all(promises);

		// const response= await requestData({ url: 'http://127.0.0.1:1337/issues/7824.json' });
		this.props.store.addIssue(responses);
	};
}