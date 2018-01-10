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
	@observable issues = [];
	@observable gitLogs = gitLogs;

	// @computed
	// get unfinishedTodoCount() {
	// 	return this.todos.filter(todo => !todo.finished).length;
	// }

	@action
	addIssue(responses) {
		this.issues.push(...responses);

		this.issues.map(issue => {
			const index = this.gitLogs.findIndex((log => Number(log.id) === Number(issue.id)));
			
			if (index !== -1) {
				this.gitLogs[index] = {
					...this.gitLogs[index],
					...issue,
				};
			}
		});
	}
}
