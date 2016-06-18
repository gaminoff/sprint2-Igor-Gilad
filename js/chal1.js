'use strict';

var gQuests = [

    {
        id: 1,
        img: '<img id="1" class="img-responsive" src="../imgGame1/1.png" />',
        opts: ['This is a hedgehog', 'This is a snail', 'This is a bear', 'This is a butterfly'],
        correctOptIndex: 0
    },
    {
        id: 2,
        img: '<img id="2"  class="img-responsive" src="../imgGame1/2.png" />',
        opts: ['This is a lion', 'This is  Puki', 'This is a fox', 'This is a snail'],
        correctOptIndex: 3
    },
    {
        id: 3,
        img: '<img id="3"  class="img-responsive" src="../imgGame1/3.png" />',
        opts: ['This is a toad', 'This is a squirrel', 'This is a hedgehog', 'This is a worm'],
        correctOptIndex: 1
    },
    {
        id: 4,
        img: '<img id="4"  class="img-responsive" src="../imgGame1/4.png" />',
        opts: ['This is a wolf', 'This is a dragonfly', 'This is a butterfly', 'This is a dinosaur'],
        correctOptIndex: 2
    },
    {
        id: 5,
        img: '<img id="5"  class="img-responsive" src="../imgGame1/5.png" />',
        opts: ['This is a cat', 'This is a dog', 'This is a fish', 'This is a mouse'],
        correctOptIndex: 3
    },
    {
        id: 6,
        img: '<img id="6"  class="img-responsive" src="../imgGame1/6.png" />',
        opts: ['This is a tiger', 'This is a lion ', 'This is a leopard', 'This is a grasshopper'],
        correctOptIndex: 1
    },
    {
        id: 7,
        img: '<img id="7"  class="img-responsive" src="../imgGame1/7.png" />',
        opts: ['This is a hare', 'This is a wolf', 'This is a fox', 'This is a bear'],
        correctOptIndex: 0
    },
    {
        id: 8,
        img: '<img id="8"  class="img-responsive" src="../imgGame1/8.png" />',
        opts: ['This is a snake', 'This is a squirrel', 'This is an owl', 'This is a monkey'],
        correctOptIndex: 3
    },
    {
        id: 9,
        img: '<img id="9"  class="img-responsive" src="../imgGame1/9.png" />',
        opts: ['This is an apple', 'This is a crocodile', 'This is a hedgehog with apple', 'This is Muki with apple'],
        correctOptIndex: 2
    },
    {
        id: 10,
        img: '<img id="10"  class="img-responsive" src="../imgGame1/10.png" />',
        opts: [ 'three yellow balloons', 'four yellow balloons',' one yellow and three blue balloons','No balloons' ],
        correctOptIndex: 2
    }
];

$(document).ready(function () {

    $('.picture').html(gQuests[0].img);

    for (var i = 0; i < gQuests[0].opts.length; i++) {
        $('.but' + (i + 1)).html(gQuests[0].opts[i]);
    }
});

function checkAnswerAndRenderDom(indBtn) {

    var pictureID = $('.picture img').attr("id");
    gQuests.forEach(function (gQuest, i) {
        if (pictureID == gQuest.id) {
            if (indBtn == gQuest.correctOptIndex) {
                if (i === gQuests.length - 1) {

                    alert('yeeeeesssssss!! you did it ');
                    $('.picture').html(gQuests[0].img);
                    for (var j = 0; j < gQuests[0].opts.length; j++) {
                        $('.but' + (j + 1)).html(gQuests[0].opts[j]);
                    }
                } else {
                    alert('yes');
                    $('.picture').html(gQuests[i + 1].img);
                    for (var j = 0; j < gQuests[0].opts.length; j++) {
                        $('.but' + (j + 1)).html(gQuests[i + 1].opts[j]);
                    }
                }
            } else alert('no');
        }
    })
};