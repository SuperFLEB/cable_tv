(function () {
  const TIME_MACHINE = -28;

  function sizeMarquee()
  {
    for (const outer of document.querySelectorAll('.marquee-outer')) {
      outer.style.setProperty('width', '100%');
      const testElement = document.createElement('div');
      testElement.className = 'marquee-test';
      outer.appendChild(testElement);
      testElement.style.width = '100%';
      const fullWidth = window.getComputedStyle(testElement).width;
      testElement.style.width = '1ch';
      const charWidth = window.getComputedStyle(testElement).width;
      const charsWide = Math.floor(parseInt(fullWidth)/parseInt(charWidth));
      outer.removeChild(testElement);
      outer.style.setProperty('--width-in-ch', charsWide - 2);
      outer.style.setProperty('width', null);
    }
  }

  function updateMarquee()
  {
    for (const outer of document.querySelectorAll('.marquee-outer')) {
      const inner = outer.getElementsByClassName('marquee-inner')[0];
      const newDuplicate = inner.cloneNode(true);
      newDuplicate.className = ['marquee-duplicate'].concat(Array.from(newDuplicate.classList).filter(cls => cls !== 'marquee-inner')).join(' ');
      for (const oldDuplicate of outer.getElementsByClassName('marquee-duplicate')) {
        outer.removeChild(oldDuplicate);
      }
      outer.appendChild(newDuplicate);
      outer.appendChild(newDuplicate.cloneNode(true));
      outer.appendChild(newDuplicate.cloneNode(true));
      outer.style.setProperty('--message-width', inner.innerText.length);
    }

    sizeMarquee();
  }

  window.addEventListener('resize', sizeMarquee);
  document.addEventListener('DOMContentLoaded', sizeMarquee);
  document.addEventListener('DOMContentLoaded', updateMarquee);
  document.addEventListener('load', sizeMarquee);
  
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        // Clock
		    const now = new Date();
		    const hour = now.getHours();
		    const hh = ('0' + (hour > 0 ? (hour > 12 ? hour - 12 : hour) : '12')).slice(-2);
		    const mm = ('0' + now.getMinutes()).slice(-2);
		    const ss = ('0' + now.getSeconds()).slice(-2);
		    now.setFullYear(now.getFullYear() + TIME_MACHINE);
		    const timeOut = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} TIME ${hh}:${mm}:${ss} ` + (hour >= 12 ? 'PM' : 'AM');
		    for (clock of document.getElementsByClassName('time')) {
          clock.innerText = timeOut;
        }

        // Since we're here, jostle the sizing every half-second, too
        // There's something wrong with the positioning not being ready that I can't get around with just event handlers, so far.
        // So, laziness in action, and kick the can down the road!
        sizeMarquee();
		  }, 500);

    });
 })();
