
'use strict';

$(document).ready(function init(){
    // alert('hi');

    var rows = [0].map(function(i){

        var currRowHtml = '<tr>';

        var cells = [0,1,2,3,4,5,6,7,8,9].map(function(j){
            var cellColor = (j % 2 === 0)? 'dark' : 'bright'; 
            var pawn = getPawn(i, j);

            return '<td onclick="cellClicked(this)" ' + 
                    ' data-row="'+i+'" data-col="' + j + '" ' +  
                    ' class="'+cellColor+'">' + pawn  + '</td>';
        });
        currRowHtml += cells.join('');

        currRowHtml += '</tr>';
        return currRowHtml;
    });

    
     console.log(rows[0]);

      $('.board').html(rows.join(''))


});

function getPawn(i, j) {
    var num = (10*i + j)+1;
    if(j===3) {
        $('.num1').html((10*i + j)+1)
    }
    if(j===5) {
        $('.num2').html((10*i + j)+1)
    }
        if(num===((10*i + 3)+1)|| num===((10*i + 5)+1)){
            var res = "";
        }else {
            var res = num;
        
    }
    
    return res;
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
