'use strict';

var gState = {
    playerName: 'Muki',
    currChalId: 'game1'
};


function init() {
    
    var chalsFromLocal = localStorage.getItem('gChals');
    var levelFromLocal = localStorage.getItem('level');
    // console.log(gChals);
    if ( levelFromLocal === null ) {
        updateLevelToLS(1);
        levelFromLocal = 1 ;
    }
    if (chalsFromLocal === null) localStorage.gChals = JSON.stringify(gChals);
    
    gChals = JSON.parse(localStorage.gChals);
    console.log('gChals: ', gChals);
    checkRadioBtn(levelFromLocal);
    updateChalBtns();
}


function updateChalBtns() {
    gChals.forEach(function (chal) {
        if (chal.isSolved) $('.'+chal.id+'Btn').next().removeClass('disabled') ;    
    });  
}



function updateLevelToLS(elRadio) {
    localStorage.setItem('level', elRadio);
}



function checkRadioBtn(level) {
    $('#lev'+level).prop('checked', true);
}