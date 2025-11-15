/*
 * Flow Designer Action Script: Auto Assign Incident
 * Description: Automatically assigns incidents based on category
 */

(function execute(inputs, outputs) {

    // Get current incident record
    var inc = new GlideRecord('incident');
    if (inc.get(inputs.incident_sys_id)) {

        // Check category and assign correct group
        if (inc.category == 'network') {
            inc.assignment_group.setDisplayValue('Network Team');
        } 
        else if (inc.category == 'hardware') {
            inc.assignment_group.setDisplayValue('Hardware Team');
        } 
        else {
            inc.assignment_group.setDisplayValue('General IT Support');
        }

        // Update record
        inc.update();
        gs.info('Incident ' + inc.number + ' auto-assigned successfully.');
    }

})(inputs, outputs);
