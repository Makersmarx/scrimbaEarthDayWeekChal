const pointsEl = document.getElementById('points-p');
const btnsContainer = document.getElementById('btns-container');

const actionsArr = [
  {
    name: 'recycledPaper',
    emoji: 'π',
    text: 'recycled paper',
    good: true,
  },
  {
    name: 'boughtSecondHand',
    emoji: 'π',
    text: 'bought 2nd hand',
    good: true,
  },
  {
    name: 'tookTrain',
    emoji: 'π',
    text: 'took train',
    good: true,
  },
  {
    name: 'leftLightsOn',
    emoji: 'π‘',
    text: 'left lights on',
    good: false,
  },
  {
    name: 'drippingTap',
    emoji: 'π°',
    text: 'let tap drip',
    good: false,
  },
  {
    name: 'leftCarRunningWhileDucksCrossed',
    emoji: 'π¦',
    text: 'left car running while ducks crossed road',
    good: false,
  },
];

const goodPoints = ['recycledPaper', 'boughtSecondHand', 'tookTrain'];
let points = 0;

function renderBtns() {
  actionsArr.forEach((e) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = `${e.emoji} ${e.text}`;
    btnsContainer.appendChild(button);

    if (e.good) {
      button.classList.add('btn-good');
    } else {
      button.classList.add('btn-bad');
    }

    button.addEventListener('click', () => {
      if (e.good) {
        pointsEl.textContent = `${(points += 5)} points today!`;
      } else {
        pointsEl.textContent = `${(points -= 5)} points today!`;
      }

      if (points < 0) {
        document.body.style.backgroundColor = 'red';
        pointsEl.textContent = `${points} points, you can do better π`;
      } else if (points >= 0) {
        document.body.style.backgroundColor = '#aad1b6ff';
        pointsEl.textContent = `${points} points, you rock π€!`;
      }
    });
  });
}

renderBtns();

// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the userβs score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

// stretch goal 1οΈβ£: Change each button color, green for good activities, red for bad.

// stretch goal 2οΈβ£: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3οΈβ£: Add an activity count.
