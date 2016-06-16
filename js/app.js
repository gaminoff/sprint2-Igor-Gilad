'use strict';

var gState = {
    playerName: 'Muki',
    currChalId: 'game1'
};


function init() {
    
    var chalsFromLocal = localStorage.getItem('gChals');
    // console.log(gChals);
    if (chalsFromLocal === null) localStorage.gChals = JSON.stringify(gChals);
    
    gChals = JSON.parse(localStorage.gChals);
    console.log('gChals: ', gChals);
    
    updateChalBtns();
}


function updateChalBtns() {
    
    gChals.forEach(function (chal) {
        if (chal.isSolved) {
           $('.'+chal.id+'Btn').next().removeClass('disabled') ;
           
        }
    });
    
}