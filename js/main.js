'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);



var bpSwiper = new Swiper('.bpSwiper__container', {
  slidesPerView: 3,
  spaceBetween: 24,
  // slidesPerColumn: 2,
  slidesPerGroup: 3,
  paginationClickable: true,
  navigation: {
      nextEl: '.bpSwiper__arrow-right',
      prevEl: '.bpSwiper__arrow-left',
  },
  breakpoints: {
      320: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
      },
      940: {
        slidesPerColumn: 2,
      slidesPerView: 2,
      spaceBetween: 5,
      // slidesPerGroup: 3,
      }
  }
});

// var swiper = new Swiper(".bpSwiper__container", {
//   slidesPerView: 3,
//   slidesPerColumn: 2,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var date = new Date();
var day = date.getDate()
var month = date.getMonth() + 1



// $(".bpSwiper__slide").each(function(){

//   let sliderDay = $(this).data("day"); 
//   let sliderMonth = $(this).data("month"); 

//   console.log(sliderDay ,"SliderDay",sliderMonth, "SliderMonth")


//   if(sliderMonth < month || sliderDay < day) {
//     $(this).addClass("before")
//   }else if (sliderDay == day){
//     $(this).addClass("active")
//   }else {
//     $(this).addClass("disable")
//   }


  
 

//   bpSwiper.slideTo($(this).index())

// })

var index;
$('.bpSwiper__slide').each(function () {
    if ($(this).data('day') == day && $(this).data('month') == month) {
        index = $(this).index()
    }

});
$('.bpSwiper__slide').each(function () {
    if ($(this).index() > index) {
        $(this).addClass('disable')
    }else{
        $(this).addClass('before');
    }
});

$('.bpSwiper__slide').eq(index).addClass('active')
// bpSwiper.slideTo(index)


