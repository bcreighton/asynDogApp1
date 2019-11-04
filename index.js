'use strict';

function getDogImages(dogs){
    console.log('generating dog images...');
}

function formListener(){
    console.log('listening for form submission...');
    $('form').submit(event => {
        event.preventDefault();
        
        const numberOfDogs = $('#dogs').val();
        getDogImages(numberOfDogs);
    });
}

$(function() {
    console.log('Application has loaded.');
    formListener();
})