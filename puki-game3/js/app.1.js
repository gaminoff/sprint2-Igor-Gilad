'use strict';

// var gLevel = 1 ;

function init() {
    var level = 2; 
    document.querySelector('.currLevel').innerHTML = level ;
    renderPuzzle(getLevelParam(level));
    
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}



function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    console.log(touch);
        simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        } [event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}



// function touchHandler(event)
// {
//     var touches = event.changedTouches,
//         first = touches[0],
//         type = "";
//     switch(event.type)
//     {
//         case "touchstart": type = "mousedown"; break;
//         case "touchmove":  type = "mousemove"; break;        
//         case "touchend":   type = "mouseup";   break;
//         default:           return;
//     }

//     // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
//     //                screenX, screenY, clientX, clientY, ctrlKey, 
//     //                altKey, shiftKey, metaKey, button, relatedTarget);

//     var simulatedEvent = document.createEvent("MouseEvent");
//     simulatedEvent.initMouseEvent(type, true, true, window, 1, 
//                                   first.screenX, first.screenY, 
//                                   first.clientX, first.clientY, false, 
//                                   false, false, false, 0/*left*/, null);

//     first.target.dispatchEvent(simulatedEvent);
//     event.preventDefault();
// }



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
                    ondragenter="return dragEnter(event, this)" \
                    ondrop="return dragDrop(event, this)" \
                    ondragover="return dragOver(event, this)"><span>' + randPartNum + ' + ' + 
                    (randNum-randPartNum) + '</span></div>' ;
            values.push(randNum);   
        }
        htmlStr += '</div>' ;  
    }
    elHidingPieces.innerHTML = htmlStr ;  
    // console.log(values);
    renderAnswerPiece(values); 
}




function renderAnswerPiece(values) {
    values.sort(function (a, b) {
        return a - b ;
    });  
    var elPiecesCont = document.querySelector('.piecesCont');
    var htmlStr = '' ;
    values.forEach(function (value) {
        htmlStr += '<div class="piece text-center" data-value="' + value + 
        '" draggable="true"\
        ondragstart="return dragStart(event, this)" \
        ondragend="removeDraggedClass(this)"><span>' + value + '</span></div>' ;    
    }); 
    elPiecesCont.innerHTML = htmlStr ; 
}

// touchstart="return dragStart(event, this)" \
//         touchend="removeDraggedClass(this)"



function dragStart(ev, elDraggedItem) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('data-value'));
    ev.dataTransfer.setDragImage(ev.target,50,50);
    elDraggedItem.classList.add('dragged');
    return true;
}



function removeDraggedClass(elDraggedItem) {
    elDraggedItem.classList.remove('dragged');
}



function dragEnter(ev, elTarget) {
    return true;
}



function dragOver(ev, elTarget) {
    if ( +elTarget.getAttribute('data-value') === +document.querySelector('.dragged').getAttribute('data-value') ) {
        event.preventDefault();
        return false;
    }
}



function dragDrop(ev, elTarget) {
    var src = ev.dataTransfer.getData("Text");
    ev.stopPropagation();
    elTarget.style.background = "none" ;
    document.querySelector('.dragged').style.display = 'none' ;
    return false;
}
