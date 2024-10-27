//179bpm
//우선 a 버튼은 드럼, l버튼은 기타이다.

let audioPlayerB; //베이스
let audioPlayerV; //보컬
let audioPlayerD; //드럼
let audioPlayerM; //멜로디

let button, button2, button3, button4; //기타버전, 드럼버전, 합주버전, 정지버튼
// let bpmFinal;
let level; //버전 고르는 선택지

let guitarPlay1, guitarPlay2; //기타 비트를 재는 변수
let drumPlay1, drumPlay2; //드럼 비트를 재는 변수
let bpmDrum, bpmGuitar; //간격을 이용해 음악의 속도를 조절
let bpmCal1, bpmCal2; // 버튼을 누르는 순서의 값

function preload() {
  audioPlayerB = loadSound("b.mp3");
  audioPlayerD = loadSound("d.mp3");
  audioPlayerV = loadSound("v.mp3");
  audioPlayerM = loadSound("m.mp3");
}

function setup() {
  createCanvas(400, 400);
  level = 0;
  drumPlay1 = 0;
  drumPlay2 = 0;
  bpmDrum = 1;
  bpmGuitar = 1;
  bpmCal1 = 0;
  bpmCal2 = 0;

  button = createButton("QWER");
  button.mouseClicked(qwer1);

  button2 = createButton("QWER2");
  button2.mouseClicked(qwer2);

  button3 = createButton("QWER3");
  button3.mouseClicked(qwer3);

  button4 = createButton("STOP");
  button4.mouseClicked(qwerStop);
}

function draw() {
  background(220);
  if (keyIsPressed === true) {
  }

}

function keyPressed() {
  console.log(key);
  if (level === 1) { //기타버전
    if (bpmGuitar < 0.8 || bpmGuitar > 1.2) {
      console.log("noSound_Guitar");
      audioPlayerM.setVolume(0);
    } else {
      audioPlayerM.setVolume(1);
    }
  }

  if (level === 2) {
    if (bpmDrum < 0.8 || bpmDrum > 1.2) {
      console.log("noSound_Drum");
      audioPlayerD.setVolume(0);
    } else {
      audioPlayerD.setVolume(1);
    }
  }

  if (level === 3) { //합주버전
    if (bpmGuitar < 0.8 || bpmGuitar > 1.2) {
      console.log("noSound_Guitar");
      audioPlayerM.setVolume(0);
    } else {
      audioPlayerM.setVolume(1);
    }

    if (bpmDrum < 0.8 || bpmDrum > 1.2) {
      console.log("noSound_Drum");
      audioPlayerD.setVolume(0);
    } else {
      audioPlayerD.setVolume(1);
    }
  }

  if (key === "l") {
    console.log("guitar: " + bpmGuitar);
    if (bpmCal2 === 0) {
      guitarPlay1 = millis();
      bpmGuitar = ((60 / (guitarPlay1 - guitarPlay2)) * 1000) / 178;
    }

    if (bpmCal2 === 1) {
      guitarPlay2 = millis();
      bpmGuitar = ((60 / (guitarPlay2 - guitarPlay1)) * 1000) / 178;
    }
    bpmCal2 = bpmCal2 + 1;
    if (bpmCal2 > 1) {
      bpmCal2 = 0;
    }
  }

  if (key === "a") {
    console.log("drum: " + bpmDrum);
    if (bpmCal1 === 0) {
      drumPlay1 = millis();
      bpmDrum = ((60 / (drumPlay1 - drumPlay2)) * 1000) / 178;
    }

    if (bpmCal1 === 1) {
      drumPlay2 = millis();
      bpmDrum = ((60 / (drumPlay2 - drumPlay1)) * 1000) / 178;
    }
    bpmCal1 = bpmCal1 + 1;
    if (bpmCal1 > 1) {
      bpmCal1 = 0;
    }
  }
}

function mouseClicked() {

}

function qwer1() {
  level = 1;
  audioPlayerB.play();
  audioPlayerD.play();
  audioPlayerV.play();
  audioPlayerM.play();
}

function qwer2() {
  level = 2;
  audioPlayerB.play();
  audioPlayerD.play();
  audioPlayerV.play();
  audioPlayerM.play();
}

function qwer3() {
  level = 3;
  audioPlayerB.play();
  audioPlayerD.play();
  audioPlayerV.play();
  audioPlayerM.play();
}

function qwerStop() {
  audioPlayerB.stop();
  audioPlayerD.stop();
  audioPlayerV.stop();
  audioPlayerM.stop();
}