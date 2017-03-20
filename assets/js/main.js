var select = function(s) {
    return document.querySelector(s);
},
selectAll = function(s) {
    return document.querySelectorAll(s);
}

$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

var letters = $('.letters svg')

TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set([letters], {
 drawSVG: '0% 0%',
 immediateRender: true,
    stroke: '#ff009c'
})

var tl = new TimelineMax({repeat:-1});

// for each letter
$.each(letters, function(i, letter){
  var previousLine = false
  var letter = $(letter)
  console.log(letter)

  // animate paths
  tl
  .staggerTo(letter.find('path'), 1.1, {
  cycle: {
    drawSVG: function(index, target) {
      target = $(letter).find('path').eq(index)
  console.log(letter)

      // console.log('target : %O', target);
      // console.log('target.attrclass) : %O', target.attr('class'));

      var letter = target.parent().attr('class')
      var line = target.attr('class')
      // console.log(letter);
      // console.log(line);
      var lineIndex = (line == previousLine) ? 2 : 1
      previousLine = line
      return drawLetter(letter, line, lineIndex)
    },
    stroke: ['#14f1ff', '#2609d8' ]
  },
  ease: Power4.easeOut
  }, .1, "-=1.6")

});

tl.timeScale(.8)

});

$(window).load(function() {
    $('html').addClass('js-load');
});


function drawLetter(letter, line, lineIndex) {
  var r = '0% 100%'

  if(letter == 'o') {
    if(line == 'h') {
      r = 0
    }
  } else if(letter == 'd') {
    if(line == 'square') {
    } else {
      r = 0
    }
  }else if(letter == 'u') {
    if(line == 'square') {
      if(lineIndex == 2) {
        r = '50% 100%'
      }else {
        r = '0% 25%'
      }
    } else {
      r = 0
    }
  }else if(letter == 'n') {
    if(line == 'square') {
      r = '0% 75%'
    } else {
      r = 0
    }
  }else if(letter == 'e') {
    if(line == 'square') {
      r = '25% 100%'
    } else if(line == 'h') {
      r = '0% 100%'
    } else {
      r = 0
    }
  }else if(letter == 'x') {
    if(line == 'square' || line == 'h') {
      r = 0
    } else {
      r = '0% 100%'
    }
  }else if(letter == 'r') {
    if(line == 'square') {
      r = '12.5% 75%'
    } else if(line == 'h') {
      r = '0% 100%'
    } else if(line == 'ltr') {
      r = '50% 100%'
    } else if(line == 'rtl') {
      r = 0
    }
  }else if(letter == 'p') {
    if(line == 'square') {
      r = '12.5% 75%'
    } else if(line == 'h') {
      r = '0% 100%'
    } else {
      r = 0
    }
  }else if(letter == 'all') {
    if(line == 'square') {
      r = '0% 75%'
    } else if(line == 'h') {
      r = '0% 100%'
    } else if(line == 'ltr') {
      r = '0% 0%'
    } else if(line == 'rtl') {
      r = '0% 0%'
    }
  }
  return r
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}