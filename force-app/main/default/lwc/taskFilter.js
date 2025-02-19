import { LightningElement } from 'lwc';

export default class TaskFilter extends LightningElement {
    value = 'All';

    get options() {
        return [
            { label: 'All', value: 'All' },
            { label: 'Open', value: 'Open' },
            { label: 'In Progress', value: 'In Progress' },
            { label: 'Completed', value: 'Completed' },
        ];
    }

    handleFilterChange(event) {
        const selectedFilter = event.target.value;
        this.dispatchEvent(new CustomEvent('filterchange', { detail: selectedFilter }));
    }
}