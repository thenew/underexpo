var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },

letters = selectAll('.letters svg')
// lettersPaths = selectAll('path')


function rand(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set([letters], {
 drawSVG: '0% 0%',
 immediateRender: true,
    // stroke: '#ff009c'
})

var tl = new TimelineMax({repeat:-1});
// ScrubGSAPTimeline(tl);


// for each letter
letters.forEach(function(letter, i){
  var previousLine = false
  // animate paths
  tl
  .staggerTo(letter.querySelectorAll('g:not(.bg) path'), 1.1, {
  cycle: {
    drawSVG: function(index, target) {
      var letter = target.parentNode.classList.value
      var line = target.classList.value
      var lineIndex = (line == previousLine) ? 2 : 1
      previousLine = line
      return drawLetter(letter, line, lineIndex)
    },
    stroke: ['#14f1ff', '#2609d8' ]
  },
  ease: Power4.easeOut
  }, .1, "-=1.6")

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
  }else if(letter == 'bg') {
    if(line == 'square') {
      r = '0% 100%'
    } else {
      r = 0
    }
  // }else if(letter == 'all') {
  //   if(line == 'square') {
  //     r = '0% 75%'
  //   } else if(line == 'h') {
  //     r = '0% 100%'
  //   } else if(line == 'ltr') {
  //     r = '0% 0%'
  //   } else if(line == 'rtl') {
  //     r = '0% 0%'
  //   }
  }
  return r
}

tl.timeScale(.8)