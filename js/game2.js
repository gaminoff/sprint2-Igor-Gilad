
'use strict';

var gArrRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var empty1;
var empty2;
var rowShown = 0;

$(document).ready(function init() {
    renderBoard();
    alert('igor');
    $('tr').hide();
    $("[data-ro=" + 0 + "]").show();
    forward();
    dragAndDrop(empty1, empty2);
    console.log($("[data-col=" + 5 + "]"));
});

function renderBoard() {
    var rows = gArrRows.map(function (i) {
        var currRowHtml = '<tr  data-ro="' + i + '">';
        var cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (j) {
            var cellColor = (j % 2 === 0) ? 'dark' : 'bright';
            var num = getNum(i, j, empty1, empty2);
            return '<td onclick="cellClicked(this)" ' +
                ' data-row="' + i + '" data-col="' + j + '" ' +
                ' class="' + cellColor + ' cell' + j + '">' + num + '</td>';
        });
        currRowHtml += cells.join('');
        currRowHtml += '</tr>';
        return currRowHtml;
    });
    $('.board').html(rows.join(''));
}

function forward() {
    getRandomCells();
    getEmptySpaces(empty1, empty2);
    renderAnswers(empty1, empty2);
    $("[data-ro=" + rowShown + "]").show();
}

function getNum(i, j) {
    var num = (10 * i + j) + 1;
    return num;
}

function getEmptySpaces(empty1, empty2) {
    $("[data-col=" + empty1 + "][data-row=" + rowShown + "]").html('');
    $("[data-col=" + empty2 + "][data-row=" + rowShown + "]").html('');
}

function renderAnswers(empty1, empty2) {

    $('.answer1').html(empty1 + 1 + 10 * rowShown);
    $('.answer2').html(empty2 + 1 + 10 * rowShown);
    $('.answer1').show();
    $('.answer2').show();

}

function dragAndDrop(empty1, empty2) {
    var check = 0;
    $('.answer').draggable({ scope: rowShown, revert: true });
    $("[data-col=" + empty1 + "][data-row=" + rowShown + "]").droppable({
        accept: '.answer1', scope: rowShown, drop: function (event, ui) {
            $(this).html(ui.draggable.html());
            ui.draggable.hide();
            check++;
            checkEndOfStage(check);
        }
    });
    $("[data-col=" + empty2 + "][data-row=" + rowShown + "]").droppable({
        accept: '.answer2', scope: rowShown, drop: function (event, ui) {
            $(this).html(ui.draggable.html());
            ui.draggable.hide();
            check++;
            checkEndOfStage(check);
        }
    });
}

function checkEndOfStage(check) {
    if (check === 2) {
        // console.log(gArrRows);
        rowShown++;
        if (rowShown < 10) {
            forward();
            dragAndDrop(empty1, empty2);
            console.log(empty1, empty2);
        } else alert('you did it!!!!!');
    }
}

function getRandomCells() {
    empty1 = parseInt(Math.random() * 10);
    empty2 = parseInt(Math.random() * 10);
    while (empty1 === empty2) {
        empty2 = parseInt(Math.random() * 10);
    }
    console.log(empty1);
    console.log(empty2);
}
