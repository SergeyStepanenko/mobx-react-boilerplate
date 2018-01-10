import { observable, computed, action } from 'mobx';

import IssueModel from './IssueModel';

const gitLogs = [
	{
		'id': '7824',
		'type': 'task',
		'new': [
			'init package'
		],
		'fix': [
			'test tag'
		]
	},
	{
		'id': '7950',
		'type': 'bug',
		'ignore': [
			'ololo, works!'
		]
	},
	{
		'id': '8935',
		'type': 'task',
		'testme': [
			'works!'
		],
		'misc': [
			'kek'
		]
	}
];

export default class IssueListModel {
	@observable gitLogs = gitLogs;
	@observable sortAsc = true;

	@computed
	get sortingStatus() {
		return (this.sortAsc) ? 'asc' : 'desc';
	}

	@action
	addIssue(responses) {
		responses.map(issue => {
			const index = this.gitLogs.findIndex((log => Number(log.id) === Number(issue.id)));
			
			if (index !== -1) {
				this.gitLogs[index] = {
					...this.gitLogs[index],
					...issue,
				};
			}
		});
	}

	@action
	sortTable() {
		this.sortAsc = !this.sortAsc;
		const sortAsc = (a, b) => b.id - a.id;
		const sortDsc = (a, b) => a.id - b.id;
		const sortingFunc = this.sortAsc ? sortDsc : sortAsc;
		this.gitLogs = this.gitLogs.sort(sortingFunc);
	}
}
