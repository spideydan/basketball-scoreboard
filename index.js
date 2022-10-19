// Starting parameters
let homeScore = 0;
let guestScore = 0;
let reset = false;
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
score1.textContent = homeScore;
score2.textContent = guestScore;

// Increasing home score
function addOneHome() {
  homeScore += 1;
  score1.textContent = homeScore;
  checkScore();
}

function addTwoHome() {
  homeScore += 2;
  score1.textContent = homeScore;
  checkScore();
}

function addThreeHome() {
  homeScore += 3;
  score1.textContent = homeScore;
  checkScore();
}

// Increasing guest score
function addOneGuest() {
  guestScore += 1;
  score2.textContent = guestScore;
  checkScore();
}

function addTwoGuest() {
  guestScore += 2;
  score2.textContent = guestScore;
  checkScore();
}

function addThreeGuest() {
  guestScore += 3;
  score2.textContent = guestScore;
  checkScore();
}
// Reset score when hitting new game button
function resetScore() {
  homeScore = 0;
  guestScore = 0;
  score1.textContent = homeScore;
  score2.textContent = guestScore;
}
// Highlight winning team
function checkScore() {
  if (homeScore > guestScore) {
    score2.style.border = "none";
    score1.style.border = "solid 2px red";
    score1.style.margin = "0";
  } else if (guestScore > homeScore) {
    score1.style.border = "none";
    score2.style.border = "solid 2px red";
    score2.style.margin = "0";
  }
}
