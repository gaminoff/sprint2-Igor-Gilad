
'use strict';
var KNIGHT=1;




$(document).ready(function init(){
    alert('hi');

    var rows = [0,1,2,3,4,5,6,7,8,9,10].map(function(i){

        var currRowHtml = '<tr>';

        var cells = [0,1,2,3,4,5,6,7,8,9,10].map(function(j){
            var cellColor = ((i + j) % 2 === 0)? 'dark' : 'bright'; 
            var pawn = getPawn(i, j);

            return '<td onclick="cellClicked(this)" ' + 
                    ' data-row="'+i+'" data-col="' + j + '" ' +  
                    ' class="'+cellColor+'">' + pawn  + '</td>';
        });
        currRowHtml += cells.join('');

        currRowHtml += '</tr>';
        return currRowHtml;
    });


    // console.log(rows);
    $('.board').html(rows.join(''))


});

function getPawn(i, j) {
    if (i === 4 && j === 4) return KNIGHT;
    return '';
}


// function cellClicked(cell) {
//     console.log('cell: ', cell);
    

//         var $cell = $(cell);
//         var data = $cell.data();
//     if ($cell.html() === KNIGHT) {
     
//     } 
// } 
// function checkPosibolMovment(date, innerHtml){
    
// }
