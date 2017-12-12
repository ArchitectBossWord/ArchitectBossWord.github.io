let verbsFile = "https://raw.githubusercontent.com/ArchitectBossWord/ArchitectBossWord.github.io/master/Verbs.txt";
let adjectivesFile = "https://raw.githubusercontent.com/ArchitectBossWord/ArchitectBossWord.github.io/master/Adjectives.txt";

let verbs = [];
let adjectives = [];

function randomElement(arr)
{
    let length = arr.length;
    let index = Math.floor(Math.random()*length);
    return arr[index];
}

function onclick()
{
    let randVerb = randomElement(verbs);
    let randAdjec = randomElement(adjectives);

    let label = document.getElementById("TheWords");
    label.innerText = randAdjec + " " + randVerb; 
}

function downloadWords()
{
    fetch(verbsFile)
        .then(function(response) {return response.text();})
        .then(function(text) { verbs = text.split("\n").filter(w => w.length > 0); });
    fetch(adjectivesFile)
        .then(function(response) {return response.text();})
        .then(function(text) { adjectives = text.split("\n").filter(w => w.length > 0); });
}

function Setup()
{
    downloadWords();
    let btn = document.getElementById("TheBigButton");
    btn.onclick = onclick;
}

window.onload = function()
{
    Setup();
}
