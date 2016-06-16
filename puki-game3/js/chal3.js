'use strict';

// var gLevel = 1 ;
var gCorrectCounter = 0 ;

function init() {
    var level = 1; 
    document.querySelector('.currLevel').innerHTML = level ;
    renderPuzzle(getLevelParam(level));
    $('.piece').draggable({ revert: true });
    makeDroppable();
}



function makeDroppable() {
    var droppables = document.querySelectorAll('.col-xs-3');
    droppables.forEach(function (slot, i) { 
        var slotData = $(slot).attr('data-value');  
        $(slot).droppable({ drop: handleDrop,
                            accept: '.val'+slotData });
    });
}



function getLevelParam(level) {
    switch (level) {
        case 1:
            return 10 ;
        case 2:
            return 20 ;
        case 3:
            return 100 ;
    }
}



function renderPuzzle(levelParam) {
    var values = [];
    var elHidingPieces = document.querySelector('.hidingPieces');
    var htmlStr = '';
    for ( var i = 0 ; i < 4 ; i++ ) {
        htmlStr += '<div class="row">' ;
        for ( var j = 0 ; j < 4 ; j++ ) {
            var randNum = parseInt( Math.random() * levelParam ) + 1 ;
            var randPartNum = parseInt( Math.random() * randNum ) + 1 ;
            htmlStr += '<div class="col-xs-3 text-center" data-value="' + randNum + '" \
                    ><span>' + randPartNum + ' + ' + 
                    (randNum-randPartNum) + '</span></div>' ;
            values.push(randNum);   
        }
        htmlStr += '</div>' ;  
    }
    elHidingPieces.innerHTML = htmlStr ;
    renderAnswerPiece(values); 
}



function renderAnswerPiece(values) {
    values.sort(function (a, b) {
        return a - b ;
    });  
    var elPiecesCont = document.querySelector('.piecesCont');
    var htmlStr = '' ;
    values.forEach(function (value) {
        htmlStr += '<div class="piece text-center val'+value+'" data-value="' + value + 
                    '"><span>' + value + '</span></div>' ;    
    }); 
    elPiecesCont.innerHTML = htmlStr ; 
}



function handleDrop( event, ui ) {
    ui.draggable.draggable({ revertDuration: 0 });
    this.style.background = 'transparent';
    var slotValue = $(this).attr('data-value');
    $(document.querySelector('.val'+slotValue)).remove() ;
    
    
    gCorrectCounter++ ;
    // console.log('correct: ', gCorrectCounter);
    if ( gCorrectCounter === 16 ) {
        console.log('Win!');
    }
}
    
