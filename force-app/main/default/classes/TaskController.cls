public with sharing class TaskController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks(String filter) {
        String query = 'SELECT Id, Subject, ActivityDate, CreatedDate, Owner.Name, Status FROM Task';
        if (!String.isEmpty(filter) && filter != 'All') {
            query += ' WHERE Status = :filter';
        }
        return Database.query(query);
    }
}