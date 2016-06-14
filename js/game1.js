'use strict';

var gQuests = [

    {   id:1,
        img:'<img id="1" src="img/layout/ca.png" />',
        opts:['abc','def'],
        correctOptIndex:0
    },
    {   id:2,
        img:'<img id="2" src="img/layout/ca-white.png" />',
        opts:['bca','edf'],
        correctOptIndex:1
    },
    {   id:3,
        img:'<img id="3" src="img/layout/logo.png" />',
        opts:['cba','fed'],
        correctOptIndex:0
    }
];

console.log(gQuests);
console.log(gQuests[0].opts[0]);


$(document).ready(function(){
$('.but1').html(gQuests[0].opts[0]);
$('.but2').html(gQuests[0].opts[1]);
$('.picture').html(gQuests[0].img);
});

function answer(index){
var pictureID = $('.picture img').attr("id");
// console.log(pictureID);
    gQuests.forEach(function(gQuest,i){
        console.log('pictureID',pictureID);
        console.log('gQuest.id',gQuest.id);
        console.log('index',index);
        console.log('gQuest.correctOptIndex',gQuest.correctOptIndex);
        if(pictureID==gQuest.id){
            if(index==gQuest.correctOptIndex){
                if(i===gQuests.length-1){
                    alert('yeeeeesssssss!! you did it ');
                    $('.but1').html(gQuests[0].opts[0]);
                    $('.but2').html(gQuests[0].opts[1]);
                    $('.picture').html(gQuests[0].img);
                }else
                    alert('yes');
                    $('.but1').html(gQuests[i+1].opts[0]);
                    $('.but2').html(gQuests[i+1].opts[1]);
                    $('.picture').html(gQuests[i+1].img);
            }else alert('no');
        }
    })
};