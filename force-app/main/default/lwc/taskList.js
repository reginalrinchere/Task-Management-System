import { LightningElement, api, track, wire } from 'lwc';
import getTasks from '@salesforce/apex/TaskController.getTasks';

export default class TaskList extends LightningElement {
    @api filter = 'All';
    @track tasks = [];
    @track filteredTasks = [];

    @wire(getTasks, { filter: '$filter' })
    wiredTasks({ error, data }) {
        if (data) {
            this.tasks = data;
            this.applyFilter();
        } else if (error) {
            console.error(error);
        }
    }

    applyFilter() {
        this.filteredTasks = this.filter === 'All' ? [...this.tasks] : this.tasks.filter(task => task.Status === this.filter);
    }
}