/**
 * Interactive form and chart events / logic.
 */
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
  
  // gradient shit
  getGradientColor = function(start_color, end_color, percent) {
    // strip the leading # if it's there
    start_color = start_color.replace(/^\s*#|\s*$/g, '');
    end_color = end_color.replace(/^\s*#|\s*$/g, '');
 
    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(start_color.length == 3){
      start_color = start_color.replace(/(.)/g, '$1$1');
    }
 
    if(end_color.length == 3){
      end_color = end_color.replace(/(.)/g, '$1$1');
    }
 
    // get colors
    var start_red = parseInt(start_color.substr(0, 2), 16),
        start_green = parseInt(start_color.substr(2, 2), 16),
        start_blue = parseInt(start_color.substr(4, 2), 16);
 
    var end_red = parseInt(end_color.substr(0, 2), 16),
        end_green = parseInt(end_color.substr(2, 2), 16),
        end_blue = parseInt(end_color.substr(4, 2), 16);
 
    // calculate new color
    var diff_red = end_red - start_red;
    var diff_green = end_green - start_green;
    var diff_blue = end_blue - start_blue;
 
    diff_red = ( (diff_red * percent) + start_red ).toString(16).split('.')[0];
    diff_green = ( (diff_green * percent) + start_green ).toString(16).split('.')[0];
    diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split('.')[0];
 
    // ensure 2 digits by color
    if( diff_red.length == 1 ) diff_red = '0' + diff_red
    if( diff_green.length == 1 ) diff_green = '0' + diff_green
    if( diff_blue.length == 1 ) diff_blue = '0' + diff_blue
 
    return '#' + diff_red + diff_green + diff_blue;
  };
 
  // end gradient shit

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
    // const colors = generateColor('AliceBlue', 'DarkRed', items.length)
    // console.log(colors)
    for (var i = 0; i < items.length; i++) {
      const year = Math.floor(i / 52)
      // aliceblue to darkred
      const colour = getGradientColor('#F0F8FF', '#8B0000', year/90)
      console.log(colour)


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