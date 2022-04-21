// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

// prop
const poem = document.getElementById('poem');

const obj = {
  color1: 'green',
  color2: 'blue',
  planet: 'Earth',
  adjective: 'clean',
  emojis: ['🚂', '🌍', '🛼', '🍩', '🏖', '🎠', '🔮'],
  sentence: function () {
    return `<p><span style='color: #A16E47'>Forests</span> are ${this.color1}, <span style='color: purple; font-weight: 900'>oceans</span> are <span style='color: blue'>${this.color2}</span>.</p> Keep the ${this.emojis[1]} ${this.adjective}, for me and for you.`;
  },
};

document.body.style.backgroundColor = `#A16E47`;
obj.color2 = 'purple';
poem.innerHTML = obj.sentence();


