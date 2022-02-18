var can_revert_wizard = false;

function openstep(evt, stepname) {
    var i, stepcontent, steplinks;
    if (evt.currentTarget.className.indexOf("wizard_done") > -1 && !can_revert_wizard) return;
    stepcontent = classes("stepcontent");
    for (i = 0; i < stepcontent.length; i++) {
        stepcontent[i].style.display = "none";
    }
    steplinks = classes("steplinks");
    for (i = 0; i < steplinks.length; i++) {
        steplinks[i].className = steplinks[i].className.replace(" active", "");
    }
    id(stepname).style.display = "block";
    evt.currentTarget.className += " active";
}