import { observable } from 'mobx';

export default class IssueModel {
    @observable issue;
    
    constructor(issue) {
    	this.id = issue.id;
    	this.status = issue.status.name;
    	this.subject = issue.subject;
    	this.assignedTo = issue.assigned_to.name;
    }
}
