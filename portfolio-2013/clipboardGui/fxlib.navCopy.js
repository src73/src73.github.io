var rowClick=new setting(true);

function setting(valueIn) {
    this.value=valueIn;
}
//functions in settings. 
setting.prototype.set = function(changeValue) {
    this.value=changeValue;
}

/*THIS IS GUI RELATED STUFF. IT IS THE DESCRIPTION OF WHAT IS IN THE BOXES!!! */

function timeNav() { return "\
    <div class='fill'><h3 class='tiny'>time</h3></div>\
    <a class='cLink white' href='clipboard.event.list.3.html'><div class='fill'>Select Event</div><!--<td>List of Events</td>--></a>\
    \
    <a class='cLink white' href='#'><div class='fill'>Create Event</div></a>\
    \
    <a class='cLink white' href='clipboard.report.central.doleysh.html'><div class='fill'>Reports</div></a>\
    <!--<a href='#'><tr><td>Absent List</td></tr></a> //This will be included under Reports-->\
    <!--<a href='#'><tr><td>Tutoring Attendance</td></tr></a> //This will be included under Reports-->\
    \
    <a class='cLink white' href='#'><div class='fill'>Confirm Excused</div></a>\
    <a class='cLink white' href='#'><div class='fill'>Give Excused</div></a>\
    <!--<a href='#'><tr><td>Request Excused</td></tr></a> //Honestly, this should be embeded elsewhere-->";
}

function peopleNav() {
    return "\
        <div class='fill hTitle'><h3 class='tiny'>people</h3></div>\
        <div class='hCopy'>\
        <a class='cLink white' href='#'><div class='fill'>Find Students</div><!--<td>Manage Students; possible other name for this is View and Edit Students, or perhaps just View and Edit</td>--></a>\
        <a class='cLink white' href='#'><div class='fill'>Add Student</div></a>\
        <a class='cLink white' href='#'><div class='fill'>Get Emails</div></a>\
        <!--<a class='cLink white' href='#'><div class='fill'>Problem List</div></a>; irrelevant because it does not work. -->\
        </div>\
    ";
}

function pointsNav() {
    return "\
        <div class='fill hTitle'><h3 class='tiny'>points</h3></div>\
        <div class='hCopy'>\
        <a class='cLink white' href='#'><div class='fill'>Point Requests</div><!--<td>Manage Point Requests</td>--></a>\
        <a class='cLink white' href='#'><div class='fill'>Give Points</div><!--<td>By name, roster, event, etc. </td>--></a>\
        <a class='cLink white' href='#'><div class='fill'>See Student's Points</div><!--<td>List of Events</td>--></a>\
        <a class='cLink white' href='#'><div class='fill'>Select Event</div><!--<td>View Students' Points, All Student Point Detail</td>--></a>\
        <a class='cLink white' href='#'><div class='fill'>Assign Letters</div><!--<td>Assign Letters</td>--></a>\
        </div>\
        ";

}



function stuffNav() {
    return "\
        <div class='fill'><h3 class='tiny'>stuff</h3></div>\
        <a class='cLink white' href='#'><div class='fill'>Add Equipment</div></a>\
        <a class='cLink white' href='#'><div class='fill'>Students with Equipment</div></a>\
        <a class='cLink white' href='#'><div class='fill'>Equipment Checked out to Student</div></a>\
        <a class='cLink white' href='#'><div class='fill'>Check In</div></a>\
        <a class='cLink white' href='#'><div class='fill'>Check Out</div></a>";
}


function timeTImg(optClass) {
    if(optClass==undefined) {
        optClass="tiny";
    }
    
    return "<div class='fill'><h3 class=' "+optClass+"'>time</h3></div>";
}

function peopleTImg(optClass) {
    if(optClass==undefined) {
        optClass="tiny";
    }
    
    return "<div class='fill'><h3 class=' "+optClass+"'>people</h3></div>";
}

function pointsTImg(optClass) {
    
    if(optClass==undefined) {
        optClass="tiny";
    }
    return "<div class='fill'><h3 class=' "+optClass+"'>points</h3></div>";
}

function stuffTImg(optClass) {
    
    if(optClass==undefined) {
        optClass="tiny";
    }
    return "<div class='fill'><h3 class=' "+optClass+"'>stuff</h3></div>";
}

function helpTImg(optClass) {
    
    if(optClass==undefined) {
        optClass="tiny";
    }
    return "<div class='fill'><h3 class=' "+optClass+"'>help</h3></div>";
}
function optTImg(optClass) {
    
    if(optClass==undefined) {
        optClass="tiny";
    }
    return "<div class='fill'><h3 class=' "+optClass+"'>opt</h3></div>";
}

function logoTImg() {
    
    return "<a href='clipboard.splash.steven.3.1.html'><img src='splash.gif' alt='back to splash' style='height:111px'/></a>"

}