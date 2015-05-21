function toggleTooltip() {
    var tooltips = document.getElementsByClassName('tt');
    for(var i=0; i<tooltips.length; i++) {
        if(tooltips[i].style.display == 'none') {
            tooltips[i].style.display = 'inline';
        } else {
            tooltips[i].style.display = 'none';
        }
    }
}