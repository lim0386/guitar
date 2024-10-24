//179bpm
let audioPlayerB;
let audioPlayerV;
let audioPlayerD;
let audioPlayerM;
let bpmM;
let totalTime;
let mouseTime1, mouseTime2;
let bpmCal = 0;
// let bpmFinal;
function preload(){
  audioPlayerB = loadSound("b.mp3");
  audioPlayerD = loadSound("d.mp3");
  audioPlayerV = loadSound("v.mp3");
  audioPlayerM = loadSound("m.mp3");
}

function setup() {
  createCanvas(400, 400);
  console.log("g");
    audioPlayerB.play();
    audioPlayerD.play();
    audioPlayerV.play();
    audioPlayerM.play();
  // audioPlayerB = loadSound("b.mp3");
  // audioPlayerD = loadSound("d.mp3");
  // audioPlayerV = loadSound("v.mp3");
  // audioPlayerM = loadSound("m.mp3");
  bpmM = 1;
  mouseTime1= 0; 
    mouseTime2 = 0;
}

function draw() {
  background(220);
  // console.log(audioPlayerB.currentTime());
  // totalTime = millis();
  if (keyIsPressed === true) {
    // if (key === 'a') {
    //   console.log("g");
    //   audioPlayerB.play();
    //   audioPlayerD.play();
    //   audioPlayerV.play();
    //   audioPlayerM.play();
    //   mouseTime1= 0; 
    //   mouseTime2 = 0;
    //   // audioPlayerM.speed(bpmM);
    // }

    // if(key === '1'){
    //   bpmM = 0.6;
    // }
    // if(key === '2'){
    //   bpmM = 0.8;            
    // }
    // if(key === '3'){
    //   bpmM = 1;
    // }
    // if(key === '4'){
    //   bpmM = 1.2;
    // }
    // if(key === '5'){
    //   bpmM = 1.4;     
    // }
  }
  // audioPlayerD.rate(bpmM);
  audioPlayerD.rate(1);
  // console.log(audioPlayerB.currentTime());
  // console.log(bpmCal);
}

function keyPressed() {
  console.log(key);
  if (keyCode === ENTER) {
    console.log("g");
    audioPlayerB.play();
    audioPlayerD.play();
    audioPlayerV.play();
    audioPlayerM.play();
    
    // audioPlayerM.speed(bpmM);
  }

  if(key === '1'){
    bpmM = 0.6;
  }
  if(key === '2'){
    bpmM = 0.8;            
  }
  if(key === '3'){
    bpmM = 1;
  }
  if(key === '4'){
    bpmM = 1.2;
  }
  if(key === '5'){
    bpmM = 1.4;     
  }
}

function mouseClicked() {
  console.log(bpmM);
  if(bpmM < 0.8 || bpmM > 1.2){
    console.log("noSound");
    audioPlayerD.setVolume(0);
  }else{
    audioPlayerD.setVolume(1);
  }
  if (bpmCal === 0) {
    mouseTime1 = millis();
    // console.log("1: " + mouseTime1);
    // console.log(60/(mouseTime1 - mouseTime2)*1000/178);
    bpmM = 60/(mouseTime1 - mouseTime2)*1000/178;
  }

  if (bpmCal === 1) {
    mouseTime2 = millis();
    // mouseTime2 = mouseTime1;
    // console.log("2: " + mouseTime2);
    // console.log(60/(mouseTime2 - mouseTime1)*1000/178);
    bpmM = 60/(mouseTime2 - mouseTime1)*1000/178;

    // console.log(mouseTime2 - mouseTime1);
  }
  bpmCal = bpmCal + 1;
  if(bpmCal > 1){
    bpmCal = 0;
  }
}