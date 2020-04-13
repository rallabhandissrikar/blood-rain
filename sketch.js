var drops = [];
var drops2 = [];
let snd;
function preload(){
     snd = loadSound("snd.mp3");
}
function setup(){
    createCanvas(400,400);
    for (var i=0; i<1000; i++){
    drops.push(new Drop());
    }
    for (var i=0; i<1000; i++){
    drops2.push(new Drop2());
    }

    snd.play();
}

function draw(){
    background(100);
    for (var i=0; i<1000; i++){
    drops[i].show();
    drops[i].update();
    }

    for (var i=0; i<1000; i++){
    drops2[i].show();
    drops2[i].update();
    }
   
}