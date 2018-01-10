import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Issue = observer(({ issue }) => (
	<li>
		<div>Id: {issue.id}</div>
		<div>Статус: {issue.status}</div>
		<div>Название: {issue.subject}</div>
		<div>Назначена: {issue.assignedTo}</div>
	</li>
));

export default Issue;
