const body = document.body;
const formSubmit = document.getElementById('form-submit');
const checkboxes = document.getElementsByClassName('checkbox');
const checkboxesContainer = document.getElementById('checkboxes-container');
const form = document.querySelector('form');
const title = document.querySelector('h1');
const subName = document.querySelector('#name');

formSubmit.addEventListener('click', () => {
  let checked = document.querySelectorAll("input[type='checkbox']:checked");

  checked.forEach((e) => {
    if (e.value === 'on') {
      //checkboxesContainer.style.display = 'none';
      form.style.display = 'none';
      title.classList.add('center');
      body.classList.add('imageBody');
      title.textContent = `${subName.value} thank you for your pledge`;
    } else {
      return '';
    }
  });
});

// Task:
// Part 1: Add validation to check that the name and email fields are filled in and display a warning message if not (you might not need JS for this 😜).
// Part 2: Hide the form and show a thank you message on submit.

// stretch goal 1️⃣:  Add warning styling if the name and email fields are empty (you might not need JS for this either)

// stretch goal 2️⃣:  Personalise the thank you message with the user's name.

// stretch goal 3️⃣:  Disable the button when no checkboxes are checked.
