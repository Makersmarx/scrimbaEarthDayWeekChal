const recycleBtn = document.getElementById('recycle-btn');
const recycleSelect = document.getElementById('recycle-select');
const recycleBin = document.getElementById('recycle-bin');
const infoParagraph = document.getElementById('info-paragraph');
const removed = document.getElementById('remove');
let binned = [];

const recycle = () => {
  recycleBin.innerText = recycleSelect.value;
  binned.push(recycleSelect.value);
  if (binned.length > 4) {
    alert('This Bin Will Self Destruct');
    recycleBin.textContent = '';
    recycleSelect.selectedIndex = 0;
    binned = [];
  } else {
    recycleBin.textContent = binned;
  }
};

const remove = () => {
  binned.shift();
  if (binned.length === 0) {
    recycleBin.textContent = '';
    recycleSelect.selectedIndex = 0;
  } else {
    recycleBin.textContent = binned.pop();
  }
};
recycleBtn.addEventListener('click', recycle);
removed.addEventListener('click', remove);
// Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.
