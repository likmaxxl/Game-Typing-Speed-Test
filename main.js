function getRandomWord(randomWords) {
  return randomWords[Math.floor(Math.random() * randomWords.length)];

}
var levelBox = document.getElementsByClassName('level')[0];
var randomWords = ["malik","range","series","members","prime","west","bodies","sofia","becomes","why","typing", "ability", "keys", "learning", "many", "worth","food","their","registar","help","years","army","have","most","survival"];

var wordForTyping = document.getElementsByClassName('word')[0];
var enterText = document.getElementById('enterText'); //input field
var timeLeftbox = document.getElementsByClassName('time')[0].getElementsByTagName('span')[0];
var scoreBox = document.getElementsByClassName('score')[0];
var wordForTypingInner = wordForTyping.innerHTML = getRandomWord(randomWords);

//ratings variable
var poor = document.getElementsByClassName('ratings')[0].getElementsByTagName('span')[1];
var fair = document.getElementsByClassName('ratings')[0].getElementsByTagName('span')[2];
var good = document.getElementsByClassName('ratings')[0].getElementsByTagName('span')[3];
var veryGood = document.getElementsByClassName('ratings')[0].getElementsByTagName('span')[4];
var excelent = document.getElementsByClassName('ratings')[0].getElementsByTagName('span')[5];


var timeLeft = 10; //time for level 1;
var words = 0; //words for level 1 must be 5;
var level = 1;


//playground
//timeleft l1
var timeInterval = setInterval(timeL, 1000);
levelBox.innerHTML = "Level: 1";

function timeL() {
  timeLeft--;
  timeLeftbox.innerHTML = timeLeft;
  if (timeLeft <= 0) {
    alert('game over');
    clearInterval(timeInterval);
    enterText.disabled = true;
    if (level == 1 || level == 2) {
      poor.classList.add("rtng");
    }
    if (level == 3 || level == 4) {
      fair.classList.add("rtng");
    }
    if (level == 5 || level == 6) {
      good.classList.add("rtng");
    }
    if (level == 7 || level == 8) {
      veryGood.classList.add("rtng");
    }
    if (level == 9 || level == 10) {
      excelent.classList.add("rtng");
    }
  } else {
    enterText.addEventListener('input', function(e) {
      if (enterText.value == wordForTypingInner) {
        enterText.value = "";
        wordForTypingInner = getRandomWord(randomWords);
        wordForTyping.innerHTML = wordForTypingInner;
        words++;
        scoreBox.innerHTML = "Score: " + words;
      }
      //level2
      if (words == 3) {
        level = 2;
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 9;
      }
      //level3
      if (words == 7) {
        level = 3;
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 10;
      }
      //level4
      if (words == 13) {
        level = 4;
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 12;
      }
      //level5
      if (words == 20) {
        level = 5;
        // levelBox.className+="levelanim";
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 13;
      }
      //level6
      if (words == 28) {
        level = 6;
        // levelBox.className+="levelanim";
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 14;
      }
      //level7
      if (words == 36) {
        level = 7;
        // levelBox.className+="levelanim";
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 15;
      }
      //level8
      if (words == 45) {
        level = 8;
        // levelBox.classList.add("levelanim");

        levelBox.innerHTML = "Level: " + level;
        timeLeft = 16;
      }
      //level9
      if (words == 55) {
        level = 9;
        // levelBox.classList.add("levelanim");
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 12;
      }
      //level10
      if (words == 62) {
        level = 10;
        // levelBox.classList.add("levelanim");
        levelBox.innerHTML = "Level: " + level;
        timeLeft = 11;
      }

    });

  }

}
