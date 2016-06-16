
'use strict';

$(document).ready(function init(){
    // alert('hi');

    var rows = [0].map(function(i){

        var currRowHtml = '<tr>';

        var cells = [0,1,2,3,4,5,6,7,8,9].map(function(j){
            var cellColor = (j % 2 === 0)? 'dark' : 'bright'; 
            var num = getNum(i, j);

            return '<td onclick="cellClicked(this)" ' + 
                    ' data-row="'+i+'" data-col="' + j + '" ' +  
                    ' class="'+cellColor+' cell'+j+'">' + num  + '</td>';
        });
        currRowHtml += cells.join('');

        currRowHtml += '</tr>';
        return currRowHtml;
    });

    
    //  console.log(rows[0]);

      $('.board').html(rows.join(''))
          $("[data-col="+5+"]").attr("ondrop", "drop(event)")
          $("[data-col="+5+"]").attr("ondragover", "allowDrop(event)")
          console.log($("[data-col="+5+"]"))

// ondrop="drop(event)" ondragover="allowDrop(event)"

});

function getNum(i, j) {
    var num = (10*i + j)+1;
    if(j===3) {
        $('.num1').html((10*i + j)+1)

    }
    if(j===5) {
        $('.num2').html((10*i + j)+1)
    }
        if(num===((10*i + 3)+1)|| num===((10*i + 5)+1)){
        
          // 
         
             var res = '';

        } else {
            var res = num;
        
    }
    
    return res;
}




        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            console.log(ev);
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
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
