
var gChals = [
    {
        id: 'chal1',
        name: 'The Garden',
        isSolved: false
    },
    {
        id: 'chal2',
        name: 'The Forest',
        isSolved: false
    },
    {
        id: 'chal3',
        name: 'The Beach',
        isSolved: false
    },
    {
        id: 'chal4',
        name: 'The Castle',
        isSolved: false
    }
];

function getChals() {}
function getChalById(chalId) {}
function renderChals() {}



function reportSolved(chalId){
    
    console.log(chalId);
    // if (!localStorage.getItem('gChals'))
    gChals = JSON.parse(localStorage.gChals);
    var chalObj = gChals.filter(function (chal) {
        return chal.id === chalId ;
    });
    
    console.log(chalObj);
    chalObj[0].isSolved = true ;
    localStorage.gChals = JSON.stringify(gChals);
}



function chalCompleted(chal) {
    reportSolved(chal);
    var msgs = ['GREAT JOB!', 'WELL DONE!', 'YOU ROCK!', 'VERY GOOD!', 'EXCELLENT!'];
    setTimeout(function () {
        var htmlStr = '<div class="gameSolvedPopup"><p>' + msgs[parseInt(Math.random() * msgs.length)] + '</p>\
                    <a class="btn btn-primary btn-lg" href="'+ chal +'.html">PLAY AGAIN</a> \
                    <a class="backToMain btn btn-success btn-lg" \
                    href="../index.html">BACK TO HOME PAGE</a></div>' ;
        
        document.querySelector('.'+chal).innerHTML += htmlStr ;
    }, 2000);
    
}