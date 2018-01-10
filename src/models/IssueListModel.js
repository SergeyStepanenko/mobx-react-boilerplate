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
	addIssue(issue) {
		this.issues.push(new IssueModel(issue));
	}
}
