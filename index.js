'use strict';

function getDogImages(dogs){
    console.log('generating dog images...');
}

function formListener(){
    console.log('listening for form submission...');
    $('form').submit(event => {
        event.preventDefault();
        console.log('Generate dogs button has been clicked!');
    });
}

$(function() {
    console.log('Application has loaded.');
    formListener();
})