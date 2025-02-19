import { LightningElement } from 'lwc';

export default class TaskManager extends LightningElement {
    selectedFilter = 'All';

    handleFilterChange(event) {
        this.selectedFilter = event.detail;
    }
}