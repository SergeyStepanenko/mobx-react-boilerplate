import React, { PureComponent } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Table extends PureComponent {
	render() {
		return (
			<BootstrapTable
				responsive
				bordered
				hover
				striped
			>
				<thead>
					<tr>
						<th>
							Id
							<button onClick={this.sort}>
								{this.props.store.sortingStatus}
							</button>
						</th>
						<th>Тип</th>
						<th>Название</th>
						<th>Статус</th>
						<th>Назначена</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.store.gitLogs.map(log => (
							<tr key={log.id}>
								<td>{log.id}</td>
								<td>{log.type}</td>
								<td>{log.subject}</td>
								<td>{log.status && log.status.name}</td>
								<td>{log.assigned_to && log.assigned_to.name}</td>
							</tr>
						))
					}
				</tbody>
			</BootstrapTable>
		);
	}

	@action
	sort = () => this.props.store.sortTable();
}