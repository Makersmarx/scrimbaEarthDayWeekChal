const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10];
const reusableCupDiscount = 0.5;
const coffeePrice = 3;
const dailySavings = document.getElementById('daily-savings');
let savingsPerDayArr = [];

// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.
const addSavings = coffeesPerDay.map((cafe) => {
  savingsPerDayArr.push(cafe * reusableCupDiscount);
});

savingsPerDayArr.forEach((e, f) => {
  const days = [
    'Monday 🌳',
    'Tuesday 🌱',
    'Wednesday 🌸',
    'Thursday 🌻',
    'Friday 🌳',
    'Saturday 🌍',
    'Sunday 🌺',
  ];
  const savings = document.createElement('p');
  savings.textContent = `You saved $${e.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} on ${days[f]}`;
  dailySavings.appendChild(savings);
  dailySavings.classList.add('days');
});

let total;
savingsPerDayArr.reduce((a, b) => {
  total = a + b;
  return total;
}, 0);

document.querySelector(
  '.total-p'
).textContent = `You saved a total of $${total.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})} Recycling ♻️`;

// stretch goal 1️⃣: Show the total savings

// stretch goal 2️⃣: Add an input to add more entries to coffeesPerDay

// stretch goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50
