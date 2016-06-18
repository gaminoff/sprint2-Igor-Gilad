'use strict';

// var gState = {
//     playerName: 'Muki',
//     currChalId: 'game1'
// };


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
    
    if (gChals[gChals.length-1].isSolved) gameCompleted();
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



function gameCompleted() {
    setTimeout(function () {
        $('.chalSelector').css({'display':'none'});
        $('.gameComplete').css({'display':'flex'});
    }, 2000);       
}



function resetGame() {
    gChals.forEach(function (chal) {
        chal.isSolved = false ; 
    });
    localStorage.gChals = JSON.stringify(gChals);
}