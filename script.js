"use-strict";
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//start condition
 const scores=[0,0]
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add("hidden");

const switchPlayer=()=>{
  document.querySelector(`#current--${activePlayer}`).textContent =0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

btnRoll.addEventListener("click", () => {
  // generate random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display the dice

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png `;

  //  condition
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

  } else {

    switchPlayer();

  }
});

btnHold.addEventListener('click',()=>{
  scores[activePlayer] +=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

   if (scores[activePlayer] >= 100) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
     if (document.querySelector(`.player--${activePlayer}`).classList.contains('player--winner')) {
     
      btnRoll.disabled = true;
      btnHold.disabled = true;
     }
   }
   else{
    switchPlayer();
   }
})
btnNew.addEventListener('click',()=>{
  location.reload();
})