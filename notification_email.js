/*
 * Flow Action Script: Send Notification Email
 * Description: Sends an email to the assigned group when a new incident is created
 */

(function execute(inputs, outputs) {

    // Email subject and message body
    var subject = 'New Incident Assigned: ' + inputs.incident_number;
    var message = 'Hello ' + inputs.assignment_group_name + ',\n\n' +
        'A new incident (' + inputs.incident_number + ') has been created under category "' + inputs.incident_category + '".\n' +
        'Please review and take necessary action.\n\n' +
        'Regards,\nServiceNow System';

    // Log to system (you can integrate this with actual email actions)
    gs.info('Notification sent to: ' + inputs.assignment_group_name);
    gs.info('Subject: ' + subject);
    gs.info('Message: ' + message);

})(inputs, outputs);
