CloudStorm Solutions, a fast-growing tech company, is seeking to improve its task management system to enhance team productivity and organization. As their Salesforce developer, you have been tasked with creating a robust Task Management System using Lightning Web Components (LWC). This system will consist of two primary components: a "taskFilter" component for filtering tasks and a "taskList" component for displaying and managing task details. These components will collaborate seamlessly to streamline task management for CloudStorm Solutions.



taskFilter Component:

Develop a "taskFilter" component that resides within the "taskManager" component.
Enable users to filter tasks based on their status (e.g., open, in progress, completed).
Implement an intuitive interface for selecting task status filters.


taskList Component:

Create a "taskList" component that also resides within the "taskManager" component.
Display a list of tasks with attributes such as Task Subject, Due Date, Creation Date, and Assigned To.
Allow users to apply the selected task status filter passed from the "taskFilter" component.


taskManager (Parent) Component:

Create a parent component named "taskManager" that hosts both the "taskFilter" and "taskList" components.
Ensure the "taskManager" component passes the selected task status filter from "taskFilter" to "taskList" using the @api decorator.
