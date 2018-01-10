import { observable, computed, action } from 'mobx';

import TodoModel from './TodoModel';
import IssueModel from './IssueModel';

export default class TodoListModel {
	@observable todos = [];
	@observable issues = [];

	@computed
	get unfinishedTodoCount() {
		return this.todos.filter(todo => !todo.finished).length;
	}

	@action
	addTodo(title) {
		this.todos.push(new TodoModel(title));
	}
	
	@action
	addIssue(issue) {
		this.issues.push(new IssueModel(issue));
	}
}
