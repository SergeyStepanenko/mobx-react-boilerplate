import React, { PureComponent } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { requestData } from '../helpers';
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
				<ul>
					{this.props.store.issues.map(issue => (
						<Issue key={issue.id} issue={issue} />
					))}
				</ul>
				{this.props.store.issues.map(issue => (
					<Issue key={issue.id} issue={issue} />
				))}
				<Table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.store.gitLogs.map(log => (
								<tr>
									<td>{log.id}</td>
									<td>{log.type}</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</div>
		);
	}

	@action
	fetchData = async () => {
		const { issue } = await requestData({ url: 'http://127.0.0.1:1337/issues/7824.json' });
		this.props.store.addIssue(issue);
	};
}