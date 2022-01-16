(function () {
  var yearEl = document.getElementById('year'),
    items = document.querySelectorAll('.chart li'),
    title = document.getElementById("title"),
    itemCount,
    COLOR = 'red',
    KEY = {
      UP: 38,
      DOWN: 40
    };

  function calculateElapsedTime() {
    var currentDate = new Date(),
      dateOfBirth = _getDateOfBirth(),
      diff = currentDate.getTime() - dateOfBirth.getTime(),
      elapsedTime;

    elapsedTime = Math.round(diff / (1000 * 60 * 60 * 24 * 7));

    return elapsedTime || diff;
  }

  function _getDateOfBirth() {
    return new Date(1997, 0, 19);
  }

  function _repaintItems(number) {
    for (var i = 0; i < items.length; i++) {
      const year = Math.floor(i / 52)
      if (i < number) {
        items[i].style.backgroundColor = `hsla(${0.6666+year/90}turn, 100%, 70%, 1)`
      } else {
        items[i].style.backgroundColor = '';
      }
    }
  }

  const lines = [
    'You will die.',
    "Don't regret what you're doing.",
    "Will you regret this on your deathbed?",
    "Does this align with your goals?",
    "You are mortal.",
    "Your body will fail.",
    "Remember that you die.",
    "Life is short, and shortly it will end.",
    "All that is acquired will be lost.",
    "I shall not remain. Nothing will remain.",
    "Do not count on this lasting a long time.",
    "You are going to die, does this worry you?",
  ]

  title.innerHTML=lines[Math.floor(Math.random()*lines.length)]

  itemCount = calculateElapsedTime();
  _repaintItems(itemCount);
})();