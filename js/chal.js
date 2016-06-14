
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
