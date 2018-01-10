import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { requestData } from '../helpers';
import Todo from './Todo';
import Issue from './Issue';

@observer
export default class TodoList extends Component {
	@observable newTodoTitle = '';

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
				New Todo:
					<input
						type='text'
						value={this.newTodoTitle}
						onChange={this.handleInputChange}
					/>
					<button type='submit'>Add</button>
				</form>
				<hr />
				<ul>
					{this.props.store.todos.map(todo => (
						<Todo todo={todo} key={todo.id} />
					))}
				</ul>
				Tasks left: {this.props.store.unfinishedTodoCount}

				<div>
					<button onClick={this.fetchData}>Fetch data</button>
				</div>
				<div>
					<ul>
						{this.props.store.issues.map(issue => (
							<Issue key={issue.id} issue={issue} />
						))}
					</ul>
				</div>
			</div>
		);
	}

	@action
	fetchData = async () => {
		const { issue } = await requestData({ url: 'http://127.0.0.1:1337/issues/7824.json' });
		this.props.store.addIssue(issue);
	};

	@action
	handleInputChange = (e) => {
		this.newTodoTitle = e.target.value;
	};

	@action
	handleFormSubmit = e => {
		this.props.store.addTodo(this.newTodoTitle);
		this.newTodoTitle = '';
		e.preventDefault();
	};
}
