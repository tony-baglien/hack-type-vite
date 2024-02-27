
import WinBox from "./node_modules/winbox/src/js/winbox.js";
import anime from "animejs";
let sourceCode = '';
const textBody = document.querySelector('.textBody');

//Variables for nav menu
const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');
const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');
const contactContentMobile = document.querySelector('#contact-content-mobile');

const moreInfo = document.querySelector('#more-info');
const moreInfoContent = document.querySelector('#more-info-content');
const moreInfoContentMobile = document.querySelector('#more-info-content-mobile');


//variables for key typing
let CHAR_SPEED = 5;
let startIdx = 0;
let endIdx = 0;
let autoTypeInt;

//Load in source code
function load_source_code() {
  var request = new XMLHttpRequest();
  request.open('GET', './code.txt');
  request.onreadystatechange = () => {
    sourceCode = request.responseText;
  };
  request.send();
}

//Flicker Animation
anime({
  targets: textBody,
  opacity: () => {
    let random = Math.random() + 0.4;
    if (random > 0.9) {
      return random - 0.3;
    }
    return random;
  },
  loop: true,
  duration: 75,
});

function keyboardType() {
  document.addEventListener('keydown', () => {
    textBody.innerText = sourceCode.substring(startIdx, endIdx + CHAR_SPEED);
    endIdx += CHAR_SPEED;
    if (endIdx > sourceCode.length) {
      startIdx = 0;
      endIdx = 0;
    }
    if (textBody.scrollHeight > window.innerHeight) {
      window.scroll(0, textBody.scrollHeight + 20);
    }
  });
}

function autoType() {
  textBody.innerHTML = sourceCode.substring(startIdx, endIdx + CHAR_SPEED);
  endIdx += CHAR_SPEED;
  if (endIdx > sourceCode.length) {
    startIdx = 0;
    endIdx = 0;
  }
  if (textBody.scrollHeight > window.innerHeight) {
    window.scroll(0, textBody.scrollHeight + 20);
  }
}

//Header Menu Windows
if (window.innerWidth > 450) {
  new WinBox({
    title: 'Contact Us',
    class: ['contact-window', 'no-full', 'no-max', 'no-min'],
    top: '25px',
    left: '25px',
    background: '#03e003',
    mount: contactContent,
    width: '735px',
    hidden: true,
    onblur: function() {
      this.setBackground('#112c4f');
      this.addClass('border-shadow');
    },
    onfocus: function() {
      this.setBackground('#03e003');
      this.removeClass('border-shadow');
    },
  });
} else {
  new WinBox({
    title: 'Contact Us',
    class: ['contact-window', 'no-full', 'no-max', 'no-min'],
    top: '25px',
    left: '25px',
    background: '#03e003',
    mount: contactContentMobile,
    hidden: true,
    onblur: function() {
      this.setBackground('#112c4f');
      this.addClass('border-shadow');
    },
    onfocus: function() {
      this.setBackground('#03e003');
      this.removeClass('border-shadow');
    },
  });
}
about.addEventListener('click', () => {
  if (window.innerWidth > 450) {
    new WinBox({
      title: 'about',
      class: ['contact-about', 'no-full', 'no-max', 'no-min'],
      top: '25px',
      left: '25px',
      mount: aboutContent,
      width: '735px',
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  } else {
    new WinBox({
      title: 'About Us',
      class: ['about-window', 'no-full', 'no-max', 'no-min'],
      top: '25px',
      left: '25px',
      background: '#03e003',
      mount: aboutContent,
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  }
});


contact.addEventListener('click', () => {
  if (window.innerWidth > 450) {
    new WinBox({
      title: 'Contact Us',
      class: ['contact-window', 'no-full', 'no-max', 'no-min'],
      top: '25px',
      left: '25px',
      background: '#03e003',
      mount: contactContent,
      width: '735px',
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  } else {
    new WinBox({
      title: 'Contact Us',
      class: ['contact-window', 'no-full', 'no-max', 'no-min'],
      top: '25px',
      left: '25px',
      background: '#03e003',
      mount: contactContentMobile,
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  }
});

moreInfo.addEventListener('click', () => {
  if (window.innerWidth > 450) {
    new WinBox({
      title: 'More Info',
      class: ['contact-window', 'no-full', 'no-max', 'no-min'],
      top: '50px',
      left: '50px',
      background: '#03e003',
      mount: moreInfoContent,
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  } else {
    new WinBox({
      title: 'More Info',
      class: ['contact-window', 'no-full', 'no-max', 'no-min'],
      top: '50px',
      left: '50px',
      background: '#03e003',
      mount: moreInfoContentMobile,
      hidden: true,
      onblur: function() {
        this.setBackground('#112c4f');
        this.addClass('border-shadow');
      },
      onfocus: function() {
        this.setBackground('#03e003');
        this.removeClass('border-shadow');
      },
    });
  }
});

load_source_code();
textBody.style.maxWidth = window.innerWidth;
if (window.innerWidth < 450) {
  autoTypeInt = setInterval(() => {
    autoType();
  }, 100);
} else {
  clearInterval(autoTypeInt);
  keyboardType();
}
