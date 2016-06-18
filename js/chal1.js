'use strict';

var gQuests = [

    {
        id: 1,
        img: '<img id="1" class="img-responsive" src="../imgGame1/1.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 2,
        img: '<img id="2"  class="img-responsive" src="../imgGame1/2.png" />',
        opts: ['bca', 'edf'],
        correctOptIndex: 1
    },
    {
        id: 3,
        img: '<img id="3"  class="img-responsive" src="../imgGame1/3.png" />',
        opts: ['cba', 'fed'],
        correctOptIndex: 0
    },
    {
        id: 4,
        img: '<img id="4"  class="img-responsive" src="../imgGame1/4.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 5,
        img: '<img id="5"  class="img-responsive" src="../imgGame1/5.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 6,
        img: '<img id="6"  class="img-responsive" src="../imgGame1/6.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 7,
        img: '<img id="7"  class="img-responsive" src="../imgGame1/7.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 8,
        img: '<img id="8"  class="img-responsive" src="../imgGame1/8.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 9,
        img: '<img id="9"  class="img-responsive" src="../imgGame1/9.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    },
    {
        id: 10,
        img: '<img id="10"  class="img-responsive" src="../imgGame1/10.png" />',
        opts: ['abc', 'def'],
        correctOptIndex: 0
    }
];

// console.log(gQuests);
// console.log(gQuests[0].opts[0]);


$(document).ready(function () {
    $('.but1').html(gQuests[0].opts[0]);
    $('.but2').html(gQuests[0].opts[1]);
    $('.picture').html(gQuests[0].img);
});

function answer(index) {
    var pictureID = $('.picture img').attr("id");
    // console.log(pictureID);
    gQuests.forEach(function (gQuest, i) {
        // console.log('pictureID',pictureID);
        // console.log('gQuest.id',gQuest.id);
        // console.log('index',index);
        // console.log('gQuest.correctOptIndex',gQuest.correctOptIndex);
        if (pictureID == gQuest.id) {
            if (index == gQuest.correctOptIndex) {
                if (i === gQuests.length - 1) {
                    alert('yeeeeesssssss!! you did it ');
                    $('.but1').html(gQuests[0].opts[0]);
                    $('.but2').html(gQuests[0].opts[1]);
                    $('.picture').html(gQuests[0].img);
                } else {
                    alert('yes');
                    $('.but1').html(gQuests[i + 1].opts[0]);
                    $('.but2').html(gQuests[i + 1].opts[1]);
                    $('.picture').html(gQuests[i + 1].img);
                }
            } else alert('no');
        }
    })
};